import { writable } from 'svelte/store';

let historyFromLocalStorage: any = localStorage.getItem('history');

historyFromLocalStorage = historyFromLocalStorage
  ? JSON.parse(historyFromLocalStorage)
  : [];

export const history = writable(historyFromLocalStorage);
