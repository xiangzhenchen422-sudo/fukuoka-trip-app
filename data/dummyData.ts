export const DUMMY_DATA = [
  {
    day: 1,
    title: "Day 1｜抵達與博多美食散策",
    center: { lat: 33.5902, lng: 130.4207 }, // 博多站
    events: [
      { id: "e1", type: "transport", title: "機場 ➔ 博多車站", time: "13:00", cost: 1500, coords: { lat: 33.5858, lng: 130.4503 } },
      { id: "e2", type: "food", title: "ShinShin 博多拉麵", time: "19:00", cost: 1000, coords: { lat: 33.5902, lng: 130.4190 } },
      { id: "e3", type: "shopping", title: "運河城 & 中洲屋台", time: "21:00", cost: 2500, coords: { lat: 33.5888, lng: 130.4035 } },
    ],
  },
  {
    day: 2,
    title: "Day 2｜太宰府與戀愛神社巡禮",
    center: { lat: 33.5196, lng: 130.5239 }, // 太宰府中心
    events: [
      { id: "e4", type: "spot", title: "太宰府天滿宮", time: "10:00", cost: 0, coords: { lat: 33.5186, lng: 130.5401 } },
      { id: "e5", type: "food", title: "梅枝餅與星巴克 (建築大師設計)", time: "11:30", cost: 500, coords: { lat: 33.5196, lng: 130.5404 } },
      { id: "e6", type: "spot", title: "竈門神社 (戀愛)", time: "14:00", cost: 0, coords: { lat: 33.5358, lng: 130.5434 } },
      { id: "e7", type: "food", title: "牛腸鍋 (Motsunabe) 晚餐", time: "19:30", cost: 3000, coords: { lat: 33.5902, lng: 130.4207 } },
    ],
  },
  {
    day: 3,
    title: "Day 3｜城市綠洲與天神購物",
    center: { lat: 33.5935, lng: 130.3995 }, // 天神中心
    events: [
      { id: "e8", type: "spot", title: "大濠公園 & 福岡城跡", time: "10:00", cost: 0, coords: { lat: 33.5861, lng: 130.3764 } },
      { id: "e9", type: "food", title: "柳橋連合市場 (海鮮午餐)", time: "13:00", cost: 1800, coords: { lat: 33.5867, lng: 130.4050 } },
      { id: "e10", type: "shopping", title: "天神地下街大採買", time: "16:00", cost: 5000, coords: { lat: 33.5935, lng: 130.3995 } },
    ],
  },
  {
    day: 4,
    title: "Day 4｜門司港復古一日遊",
    center: { lat: 33.9557, lng: 130.9628 }, // 門司港中心
    events: [
      { id: "e11", type: "transport", title: "JR ➔ 門司港 (來回)", time: "08:30", cost: 3000, coords: { lat: 33.8829, lng: 130.8036 } }, // 假設單程1500
      { id: "e12", type: "food", title: "門司港燒咖哩", time: "12:30", cost: 1600, coords: { lat: 33.9557, lng: 130.9628 } },
      { id: "e13", type: "food", title: "唐戶市場 (吃壽司)", time: "15:00", cost: 2500, coords: { lat: 33.9515, lng: 130.9328 } },
    ],
  },
  {
    day: 5,
    title: "Day 5｜最終購物與返程",
    center: { lat: 33.5859, lng: 130.4503 }, // 機場附近
    events: [
      { id: "e14", type: "shopping", title: "AEON MALL 最終採買", time: "10:00", cost: 3000, coords: { lat: 33.5932, lng: 130.4130 } },
      { id: "e15", type: "food", title: "一蘭拉麵 (總本店)", time: "13:00", cost: 1000, coords: { lat: 33.5959, lng: 130.4036 } },
      { id: "e16", type: "transport", title: "前往機場 Check-in", time: "15:00", cost: 0, coords: { lat: 33.5859, lng: 130.4503 } },
    ],
  },
];
