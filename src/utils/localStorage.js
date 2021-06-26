export const loadStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const makeSessionStore = (key, value) => {
  try {
    sessionStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const getSessionStore = (key) => {
  try {
    const sessionData = sessionStorage.getItem(key);
    if (sessionData !== null) return sessionData;
    else return undefined;
  } catch (err) {
    console.log(err);
  }
};
