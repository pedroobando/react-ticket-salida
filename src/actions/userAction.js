import { v4 as uuidv4 } from 'uuid';
// import camelCase from 'camelcase';
import { getStorage, setStorage } from '../data/dataStorage';

const table = 'user';

export const listUser = () => {
  try {
    const listStorage = getStorage(table);
    return listStorage;
  } catch (err) {
    console.error('listUser - ', err.message);
    return [];
    // throw err;
  }
};

export const getOneUser = (userID) => {
  try {
    const listStorage = getStorage(table);
    return listStorage.find((item) => item._id === userID);
  } catch (err) {
    console.error('getOneUser - ', err.message);
    throw err;
  }
};

export const createUser = (user) => {
  try {
    const listStorage = getStorage(table);
    const newUser = {
      _id: uuidv4(),
      username: user.username.trim().toLowerCase(),
      email: user.email,
      password: user.password,
    };
    const newList = [newUser, ...listStorage];
    setStorage(table, newList);
    return newList;
  } catch (err) {
    console.error('createUser - ', err.message);
    throw err;
  }
};

export const updateUser = (user) => {
  try {
    const updUser = {
      _id: user._id,
      username: user.username.trim().toLowerCase(),
      email: user.email,
      password: user.password,
    };

    const listStorage = getStorage(table);
    const listDeleteItem = listStorage.filter((item) => item._id !== user._id);
    const newList = [updUser, ...listDeleteItem];
    setStorage(table, newList);
    return newList;
  } catch (err) {
    console.error('updateUser - ', err.message);
    throw err;
  }
};

export const deleteUser = (userID) => {
  try {
    const listStorage = getStorage(table);
    const listDeleteItem = listStorage.filter((item) => item._id !== userID);
    const newList = [...listDeleteItem];
    setStorage(table, newList);
    return newList;
  } catch (err) {
    console.error('deleteUser - ', err.message);
    throw err;
  }
};
