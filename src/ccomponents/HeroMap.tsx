import React, { useEffect, useMemo, useState } from 'react';
import { Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { ItineraryItem } from '../types';

declare var google: any;

interface HeroMapProps {
  currentDay: number;
  locations: ItineraryItem[];
  onMarkerClick: (item: ItineraryItem) => void;
}

// Low saturation gray map style
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "elementType": "labels.icon",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#bdbdbd" }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#eeeeee" }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{ "color": "#e5e5e5" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{ "color": "#dadada" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{ "color": "#e5e5e5" }]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{ "color": "#eeeeee" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#c9c9c9" }]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  }
];

export const HeroMap: React.FC<HeroMapProps> = ({ currentDay, locations, onMarkerClick }) => {
  const map = useMap();
  const [defaultCenter] = useState({ lat: 33.5902, lng: 130.4207 }); // Hakata Station

  // Smooth camera movement when day changes or locations update
  useEffect(() => {
    if (!map || locations.length === 0) return;

    // Calculate bounds
    const bounds = new google.maps.LatLngBounds();
    locations.forEach(loc => bounds.extend({ lat: loc.lat, lng: loc.lng }));

    // If only one location, pan to it, else fit bounds
    if (locations.length === 1) {
      map.panTo({ lat: locations[0].lat, lng: locations[0].lng });
      map.setZoom(15);
    } else {
      map.fitBounds(bounds);
      // Optional: Zoom out slightly after fitting bounds for aesthetics?
      // map.panToBounds(bounds); 
    }
  }, [map, currentDay, locations]);

  const getColor = (type: string) => {
    switch (type) {
      case 'food': return 'bg-jp-orange';
      case 'sightseeing': return 'bg-jp-green';
      case 'shopping': return 'bg-jp-pink';
      default: return 'bg-jp-blue';
    }
  };

  return (
    <div className="w-full h-full">
      <Map
        defaultCenter={defaultCenter}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        styles={mapStyle}
        mapId="DEMO_MAP_ID" // Required for AdvancedMarker, using a demo ID
      >
        {locations.map((loc) => (
          <AdvancedMarker
            key={loc.id}
            position={{ lat: loc.lat, lng: loc.lng }}
            onClick={() => onMarkerClick(loc)}
            className="cursor-pointer"
          >
            {/* Custom Floating Marker */}
            <div className={`
              relative animate-float
              w-8 h-8 rounded-full border-2 border-white shadow-lg
              flex items-center justify-center
              ${getColor(loc.type)}
            `}>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              {/* Little triangle arrow at bottom */}
              <div className={`
                absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45
                w-2 h-2 ${getColor(loc.type)}
              `}></div>
            </div>
          </AdvancedMarker>
        ))}
      </Map>
    </div>
  );
};
