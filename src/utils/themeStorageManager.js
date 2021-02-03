const hasLocalStorage = typeof Storage !== 'undefined';
const storageKey = 'theme-mode';

const themeStorageManager = {
  get(init) {
    if (!hasLocalStorage) return init;

    const value = window.localStorage.getItem(storageKey);

    return value ?? init;
  },
  set(value) {
    if (hasLocalStorage) {
      window.localStorage.setItem(storageKey, value);
    }
  },
};

export default themeStorageManager;
