import { atom } from 'recoil';
import { FONT_LIST } from '../constants';

export const fontAtom = atom<typeof FONT_LIST[number]>({
  key: 'fontAtom',
  default: 'Comic Sans MS, Comic Sans, cursive',
});
