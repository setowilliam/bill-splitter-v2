import { atom } from "jotai";
import { ItemType, PersonType, TipType } from "utils/typings";

export const peopleAtom = atom<PersonType[]>([]);
export const itemsAtom = atom<ItemType[]>([]);
export const toggleAtom = atom(true);
export const taxAtom = atom(13);
export const tipAtom = atom(0);
export const footerAtom = atom(false);
export const inputAtom = atom(false);
export const menuAtom = atom(false);
export const themeAtom = atom<"light" | "dark">("light");
export const tipTypeAtom = atom<TipType>("before");
