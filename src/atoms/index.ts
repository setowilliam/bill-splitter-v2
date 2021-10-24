import { atom } from "jotai";
import { ItemType, PersonType } from "utils/typings";

export const peopleAtom = atom<PersonType[]>([]);
export const itemsAtom = atom<ItemType[]>([]);
export const toggleAtom = atom(true);
export const taxAtom = atom(13);
export const tipAtom = atom(0);
export const footerAtom = atom(false);
