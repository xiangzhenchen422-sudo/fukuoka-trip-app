import { DayItinerary } from '../types';

export const dummyItinerary: DayItinerary[] = [
  {
    day: 1,
    date: "Day 1: Arrival & Hakata",
    items: [
      {
        id: "d1-1",
        time: "14:00",
        title: "Fukuoka Airport Arrival",
        type: "transport",
        cost: 260,
        lat: 33.5859,
        lng: 130.4501,
        notes: "Take subway to Hakata Station"
      },
      {
        id: "d1-2",
        time: "15:30",
        title: "Hakata Station City",
        type: "shopping",
        cost: 5000,
        lat: 33.5902,
        lng: 130.4207,
        notes: "Shopping at AMU Plaza"
      },
      {
        id: "d1-3",
        time: "19:00",
        title: "Nakasu Yatai Stalls",
        type: "food",
        cost: 3000,
        lat: 33.5930,
        lng: 130.4047,
        notes: "Hakata Ramen experience"
      }
    ]
  },
  {
    day: 2,
    date: "Day 2: Dazaifu Tenmangu",
    items: [
      {
        id: "d2-1",
        time: "09:00",
        title: "Nishitetsu Fukuoka (Tenjin)",
        type: "transport",
        cost: 410,
        lat: 33.5898,
        lng: 130.3995,
        notes: "Train to Dazaifu"
      },
      {
        id: "d2-2",
        time: "10:30",
        title: "Dazaifu Tenmangu Shrine",
        type: "sightseeing",
        cost: 0,
        lat: 33.5215,
        lng: 130.5349,
        notes: "Touch the ox statue for wisdom"
      },
      {
        id: "d2-3",
        time: "12:00",
        title: "Starbucks Dazaifu",
        type: "food",
        cost: 800,
        lat: 33.5195,
        lng: 130.5317,
        notes: "Famous Kengo Kuma architecture"
      },
      {
        id: "d2-4",
        time: "15:00",
        title: "Kyushu National Museum",
        type: "sightseeing",
        cost: 700,
        lat: 33.5198,
        lng: 130.5381
      }
    ]
  },
  {
    day: 3,
    date: "Day 3: Yanagawa River",
    items: [
      {
        id: "d3-1",
        time: "10:00",
        title: "Yanagawa River Punting",
        type: "sightseeing",
        cost: 1600,
        lat: 33.1610,
        lng: 130.4137,
        notes: "70 min boat ride"
      },
      {
        id: "d3-2",
        time: "12:30",
        title: "Unagi (Eel) Lunch",
        type: "food",
        cost: 4500,
        lat: 33.1663,
        lng: 130.3986,
        notes: "Steamed eel specialty"
      }
    ]
  },
  {
    day: 4,
    date: "Day 4: Itoshima Drive",
    items: [
      {
        id: "d4-1",
        time: "11:00",
        title: "Sakurai Futamigaura",
        type: "sightseeing",
        cost: 0,
        lat: 33.6457,
        lng: 130.1983,
        notes: "Couple rocks & Torii gate in the sea"
      },
      {
        id: "d4-2",
        time: "13:00",
        title: "Sunset Road Cafe",
        type: "food",
        cost: 1500,
        lat: 33.6339,
        lng: 130.2132
      },
      {
        id: "d4-3",
        time: "15:30",
        title: "Keya no Oto",
        type: "sightseeing",
        cost: 0,
        lat: 33.6067,
        lng: 130.1345,
        notes: "Scenic cliff view"
      }
    ]
  },
  {
    day: 5,
    date: "Day 5: Tenjin Shopping",
    items: [
      {
        id: "d5-1",
        time: "10:00",
        title: "Ohori Park",
        type: "sightseeing",
        cost: 0,
        lat: 33.5878,
        lng: 130.3764,
        notes: "Morning walk"
      },
      {
        id: "d5-2",
        time: "12:00",
        title: "Tenjin Underground Mall",
        type: "shopping",
        cost: 10000,
        lat: 33.5916,
        lng: 130.3989
      },
      {
        id: "d5-3",
        time: "16:00",
        title: "Fukuoka Airport Departure",
        type: "transport",
        cost: 260,
        lat: 33.5859,
        lng: 130.4501
      }
    ]
  }
];