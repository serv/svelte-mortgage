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
    },
    get: (id) => {
      let historyFromLocalStorage = getHistory();

      if (historyFromLocalStorage.length < 1) {
        return null;
      }

      if (id === null || id === undefined || id === 0) {
        if (historyFromLocalStorage.length > 0) {
          id = historyFromLocalStorage[0].id;
        }
      }

      historyFromLocalStorage = historyFromLocalStorage.filter(
        (e) => e.id === id
      );

      return historyFromLocalStorage[0];
    }
  };
}

export const history = createHistory();
export const currentId = writable(0);
