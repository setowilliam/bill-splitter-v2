import { atom } from "jotai";

export const addAtom = atom<"people" | "items" | null>(null);
