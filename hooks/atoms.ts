import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
});

export const tokenState = atom({
  key: "token",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userData = atom({
  key: "userData",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const paginationState = atom({
  key: "pagination",
  default: { offset: 0, limit: 0, total: 0 },
  effects_UNSTABLE: [persistAtom],
});

export const queryState = atom({
  key: "query",
  default: "",
});
