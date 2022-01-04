
export const storageService = {
    getItem(key) {
      return sessionStorage.getItem(key);
    },
  
    setItem(key, value) {
      return sessionStorage.setItem(key, value);
    },
  
    removeItem(key) {
      return sessionStorage.removeItem(key);
    },
  
    clear() {
      return sessionStorage.clear();
    },
}