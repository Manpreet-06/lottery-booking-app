export function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  export function setInLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  export function removeFromLocalStorage(key) {
    return localStorage.removeItem(key);
  }
  