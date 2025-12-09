import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Save, Calculator } from 'lucide-react';
import { ItineraryItem } from '../types';

interface EditModalProps {
  item: ItineraryItem;
  onClose: () => void;
  onSave: (item: ItineraryItem) => void;
}

const TAIWAN_EXCHANGE_RATE = 0.22;

export const EditModal: React.FC<EditModalProps> = ({ item, onClose, onSave }) => {
  const [formData, setFormData] = useState<ItineraryItem>({ ...item });
  const [ntPrice, setNtPrice] = useState<number>(0);

  useEffect(() => {
    setNtPrice(Math.floor(formData.cost * TAIWAN_EXCHANGE_RATE));
  }, [formData.cost]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'cost' ? Number(value) : value
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
      />

      {/* Modal Content - Glassmorphism */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="
          relative w-full max-w-md bg-white/80 backdrop-blur-xl 
          rounded-t-[30px] sm:rounded-[30px] 
          p-6 shadow-2xl border-t border-white/50
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-jp-black font-sans">Edit Spot</h3>
          <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location Name</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-jp-black focus:outline-none focus:ring-2 focus:ring-jp-blue/50"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-jp-black focus:outline-none focus:ring-2 focus:ring-jp-blue/50"
              />
            </div>
            
            <div className="flex-1 relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Cost (JPY)</label>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-jp-black focus:outline-none focus:ring-2 focus:ring-jp-blue/50"
              />
              <div className="absolute right-0 -bottom-6 flex items-center text-xs text-jp-green font-bold">
                <Calculator size={12} className="mr-1" />
                ≈ NT$ {ntPrice.toLocaleString()}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Notes</label>
            <textarea
              name="notes"
              value={formData.notes || ''}
              onChange={handleChange}
              rows={3}
              placeholder="Add details..."
              className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-jp-black focus:outline-none focus:ring-2 focus:ring-jp-blue/50 resize-none"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-jp-black text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform mt-4"
          >
            <Save size={20} />
            Save Changes
          </button>
        </div>
        
        {/* Bottom spacer for safe area on mobile */}
        <div className="h-6 sm:h-0"></div>
      </motion.div>
    </div>
  );
};
