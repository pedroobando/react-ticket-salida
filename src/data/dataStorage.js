export const getStorage = (table) => {
  try {
    if (table.trim().lenght <= 1) return [];
    const retStringData = localStorage.getItem(table) || '[]';
    return JSON.parse(retStringData);
  } catch (error) {
    console.error('Error en dataStorage - getStorage', error);
    return [];
  }
};

export const setStorage = (table, value) => {
  try {
    localStorage.setItem(table.trim(), JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error en dataStorage - setStorage', error);
    return false;
  }
};
