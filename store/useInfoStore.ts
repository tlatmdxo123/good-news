import { create } from "zustand";

type State = {
  step: number;
  name: string;
  keywordList: number[];
  wishList: number[];
};

type Action = {
  moveStep: (step: State["step"]) => void;
  updateName: (firstName: State["name"]) => void;
  selectKeyword: (keywordId: number) => void;
  selectWishList: (wishId: number) => void;
  reset: () => void;
};

const initialState = {
  name: "",
  keywordList: [],
  wishList: [],
};
// Create your store, which includes both state and (optionally) actions
export const useInfoStore = create<State & Action>((set) => ({
  step: 4,
  ...initialState,
  moveStep: (step: number) => set(() => ({ step })),
  updateName: (name) => set(() => ({ name })),
  selectKeyword: (keywordId) =>
    set((state) => {
      const maxCount = 2;
      const newList = state.keywordList.includes(keywordId)
        ? state.keywordList.filter((id) => id !== keywordId)
        : [...state.keywordList, keywordId];
      return { keywordList: newList.slice(-1 * maxCount) };
    }),
  selectWishList: (wishId) =>
    set((state) => {
      const maxCount = 2;
      const newList = state.wishList.includes(wishId)
        ? state.wishList.filter((id) => id !== wishId)
        : [...state.wishList, wishId];
      return { wishList: newList.slice(-1 * maxCount) };
    }),
  reset: () => {
    set((state) => ({
      ...state,
      ...initialState,
    }));
  },
}));
