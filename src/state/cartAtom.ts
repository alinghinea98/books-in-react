import { atom } from "recoil";
import type { Book } from "../types/Book.ts";

export const cartAtom = atom<Book[]>({
    key: "cartAtom",
    default: [],
});