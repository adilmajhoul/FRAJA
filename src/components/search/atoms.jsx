import { atom } from 'jotai';
import randomFetch from '../../utils/randomFetch';

export const isTitleFiltering = atom(false);
export const isRatingFiltering = atom(false);

export const shows = atom([]);

export const titles = atom([]);

export const title_query = atom('');

export const byRatingMin = atom(0);
export const byRatingMax = atom(10);

// ------------------------------
// state to store the random genre and page genrate in the home page for the routing to not lose state of it

export const catchRandomGenre = atom(randomFetch('genre'));
export const catchRandomPage = atom(randomFetch('page'));
