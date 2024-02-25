// Get
export const getFromLocalStorage = (key) => {
    const auth = localStorage.getItem(key);

    if (auth) {
        return JSON.parse(auth);
    }
    return null;
};

// Set
export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};