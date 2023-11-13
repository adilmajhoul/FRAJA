import { atom } from 'jotai';
import randomFetch from '../../utils/randomFetch';

// ------------------------------
// state to store the random genre and page genrate in the home page for the routing to not lose state of it

export const catchRandomGenre = atom(randomFetch('genre'));
export const catchRandomPage = atom(randomFetch('page'));
