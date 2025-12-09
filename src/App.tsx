import React, { useState, useEffect } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { HeroMap } from './components/HeroMap';
import { EditModal } from './components/EditModal';
import { dummyItinerary } from './data/dummyData';
import { ItineraryItem } from './types';
import { Calendar, Plane, Bus, Heart, Wallet, MapPin, JapaneseYen, Clock } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Mock API Key handling for demonstration purposes
// Safely access env to prevent crashes if import.meta.env is undefined
const env = (import.meta as any).env || {};
const MAPS_API_KEY = env.VITE_GOOGLE_MAPS_KEY || '';

const App: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);
  const [itinerary, setItinerary] = useState(dummyItinerary);
  const [activeTab, setActiveTab] = useState('calendar');

  const currentDayData = itinerary.find(d => d.day === currentDay);

  const handleItemClick = (item: ItineraryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleUpdateItem = (updatedItem: ItineraryItem) => {
    const newItinerary = itinerary.map(day => ({
      ...day,
      items: day.items.map(item => item.id === updatedItem.id ? updatedItem : item)
    }));
    setItinerary(newItinerary);
    setIsModalOpen(false);
  };

  // Prevent white screen if data is missing
  if (!itinerary || itinerary.length === 0) {
    return <div className="flex h-screen w-full items-center justify-center bg-jp-white">Loading Trip Data...</div>;
  }

  return (
    <APIProvider apiKey={MAPS_API_KEY}>
      <div className="flex flex-col h-screen w-full bg-jp-white relative max-w-md mx-auto shadow-2xl overflow-hidden">
        
        {/* Top Map Section (45vh) */}
        <div className="h-[45vh] w-full relative z-0">
          <HeroMap 
            currentDay={currentDay} 
            locations={currentDayData?.items || []} 
            onMarkerClick={handleItemClick}
          />
          
          {/* Day Selector Overlay */}
          <div className="absolute top-4 left-4 right-4 flex gap-2 overflow-x-auto no-scrollbar py-2 z-10 px-1">
            {itinerary.map((day) => (
              <button
                key={day.day}
                onClick={() => setCurrentDay(day.day)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg transition-all transform active:scale-95 ${
                  currentDay === day.day 
                    ? 'bg-jp-orange text-white ring-2 ring-white' 
                    : 'bg-white/90 text-jp-black backdrop-blur-sm'
                }`}
              >
                Day {day.day}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom List Section */}
        <div className="flex-1 bg-jp-white relative z-10 -mt-6 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
          
          {/* Date Header */}
          <div className="px-6 pt-6 pb-2">
            <h2 className="text-xl font-bold text-jp-black flex items-center">
              <span className="bg-jp-blue/20 text-jp-blue p-1.5 rounded-lg mr-2">
                <Calendar size={18} />
              </span>
              {currentDayData?.date || `Day ${currentDay}`}
            </h2>
            <p className="text-xs text-gray-400 mt-1 ml-10">
              {currentDayData?.items.length} locations • Total Cost: ¥{currentDayData?.items.reduce((acc, curr) => acc + curr.cost, 0).toLocaleString()}
            </p>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
            <div className="space-y-4 mt-2">
              {currentDayData?.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleItemClick(item)}
                  className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 active:scale-98 transition-transform cursor-pointer"
                >
                  {/* Time Column */}
                  <div className="flex flex-col items-center justify-center w-12 text-gray-400">
                    <span className="text-xs font-bold">{item.time.split(':')[0]}</span>
                    <span className="text-[10px]">{item.time.split(':')[1]}</span>
                    <div className="h-full w-px bg-gray-100 my-1 group-last:hidden"></div>
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md ${
                    item.type === 'food' ? 'bg-jp-orange' :
                    item.type === 'sightseeing' ? 'bg-jp-green' :
                    item.type === 'shopping' ? 'bg-jp-pink' : 'bg-jp-blue'
                  }`}>
                    {item.type === 'food' && <JapaneseYen size={18} />}
                    {item.type === 'sightseeing' && <MapPin size={18} />}
                    {item.type === 'shopping' && <Wallet size={18} />}
                    {item.type === 'transport' && <Bus size={18} />}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-jp-black text-sm truncate">{item.title}</h3>
                    <div className="flex items-center text-xs text-gray-400 mt-0.5">
                      <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 mr-2 uppercase tracking-wider text-[9px]">{item.type}</span>
                      <span>¥{item.cost.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe pt-2 px-6 h-20 flex justify-between items-start z-20 pb-6">
          <NavIcon icon={<Calendar size={24} />} active={activeTab === 'calendar'} onClick={() => setActiveTab('calendar')} />
          <NavIcon icon={<Plane size={24} />} active={activeTab === 'plane'} onClick={() => setActiveTab('plane')} />
          <div className="bg-jp-black text-white p-3 rounded-full -mt-6 shadow-xl shadow-jp-black/20 border-4 border-jp-white">
             <MapPin size={24} />
          </div>
          <NavIcon icon={<Heart size={24} />} active={activeTab === 'heart'} onClick={() => setActiveTab('heart')} />
          <NavIcon icon={<Wallet size={24} />} active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} />
        </div>

        {/* Edit Modal */}
        <AnimatePresence>
          {isModalOpen && selectedItem && (
            <EditModal 
              item={selectedItem} 
              onClose={() => setIsModalOpen(false)} 
              onSave={handleUpdateItem} 
            />
          )}
        </AnimatePresence>

      </div>
    </APIProvider>
  );
};

const NavIcon = ({ icon, active, onClick }: { icon: React.ReactNode, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`p-2 transition-colors ${active ? 'text-jp-black' : 'text-gray-300 hover:text-gray-400'}`}
  >
    {icon}
  </button>
);

export default App;
