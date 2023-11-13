import { atom } from 'jotai';

export const isTitleFiltering = atom(false);
export const isRatingFiltering = atom(false);

export const shows = atom([]);

export const titles = atom([]);

export const title_query = atom('');

export const byRatingMin = atom(0);
export const byRatingMax = atom(10);
