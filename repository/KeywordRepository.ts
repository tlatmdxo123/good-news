const keywordList = [
  { id: 1, label: "만남/관계" },
  { id: 2, label: "만남/관계" },
  { id: 3, label: "만남/관계" },
  { id: 4, label: "만남/관계" },
  { id: 5, label: "만남/관계" },
  { id: 6, label: "만남/관계" },
  { id: 7, label: "만남/관계" },
  { id: 8, label: "만남/관계" },
  { id: 9, label: "만남/관계" },
  { id: 10, label: "만남/관계" },
  { id: 11, label: "만남/관계" },
  { id: 12, label: "만남/관계" },
  { id: 13, label: "만남/관계" },
  { id: 14, label: "만남/관계" },
  { id: 15, label: "만남/관계" },
  { id: 16, label: "만남/관계" },
  { id: 17, label: "만남/관계" },
  { id: 18, label: "만남/관계" },
  { id: 19, label: "만남/관계" },
  { id: 20, label: "만남/관계" },
  { id: 21, label: "만남/관계" },
  { id: 22, label: "만남/관계" },
  { id: 23, label: "만남/관계" },
  { id: 24, label: "만남/관계" },
];

const wishList = [
  { id: 1, label: "신앙의 훈련과 성장" },
  { id: 2, label: "신앙의 훈련과 성장" },
  { id: 3, label: "신앙의 훈련과 성장" },
  { id: 4, label: "신앙의 훈련과 성장" },
  { id: 5, label: "신앙의 훈련과 성장" },
  { id: 6, label: "신앙의 훈련과 성장" },
  { id: 7, label: "신앙의 훈련과 성장" },
  { id: 8, label: "신앙의 훈련과 성장" },
  { id: 9, label: "신앙의 훈련과 성장" },
  { id: 10, label: "신앙의 훈련과 성장" },
  { id: 11, label: "신앙의 훈련과 성장" },
  { id: 12, label: "신앙의 훈련과 성장" },
  { id: 13, label: "신앙의 훈련과 성장" },
  { id: 14, label: "신앙의 훈련과 성장" },
  { id: 15, label: "신앙의 훈련과 성장" },
];

const letterList: {
  [key: number]: {
    ko: { text: string; info: string };
    en: { text: string; info: string };
  };
} = {
  1: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  2: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  3: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  4: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  5: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  6: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  7: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  8: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  9: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  10: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  11: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  12: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  13: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  14: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
  15: {
    ko: {
      text: "예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는자에게는 능치 못할 일이 없느니라 하시니",
      info: "마가복음 9:23",
    },
    en: {
      text: "'If you can'? said Jesus. Everything is possible for him who believes.",
      info: "마가복음 9:23",
    },
  },
};

export const KeywordRepository = {
  getKeywordList: () => {
    return keywordList;
  },
  getWishList: () => {
    return wishList;
  },
  getLetter: (id: number) => {
    return letterList[id];
  },
};
