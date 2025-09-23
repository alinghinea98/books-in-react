import { atom } from "recoil";
import { Book } from "../types/Book.ts";

export const cartAtom = atom<Book[]>({
    key: "cartAtom",
    default: [],
});