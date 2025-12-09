export type LocationType = 'sightseeing' | 'food' | 'shopping' | 'transport' | 'hotel';

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  type: LocationType;
  cost: number;
  lat: number;
  lng: number;
  notes?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  items: ItineraryItem[];
}