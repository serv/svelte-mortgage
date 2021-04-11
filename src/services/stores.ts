import { writable } from 'svelte/store';

function getHistory() {
  let historyFromLocalStorage: any = localStorage.getItem('history');

  return historyFromLocalStorage ? JSON.parse(historyFromLocalStorage) : [];
}

function createHistory() {
  let historyFromLocalStorage = getHistory();

  const { subscribe, set, update } = writable(historyFromLocalStorage);

  return {
    subscribe,
    remove: (id) => {
      let historyFromLocalStorage = getHistory();

      historyFromLocalStorage = historyFromLocalStorage.filter(
        (e) => e.id !== id
      );

      localStorage.setItem('history', JSON.stringify(historyFromLocalStorage));
      return set(historyFromLocalStorage);
    },
    add: (mortgage) => {
      let historyFromLocalStorage = getHistory();

      historyFromLocalStorage.unshift(mortgage);

      localStorage.setItem('history', JSON.stringify(historyFromLocalStorage));
      return set(historyFromLocalStorage);
    },
    reset: () => {
      localStorage.setItem('history', []);
      set([]);
    }
  };
}

export const history = createHistory();
