import { v4 as uuidv4 } from 'uuid';
// import camelCase from 'camelcase';
import { getStorage, setStorage } from '../data/dataStorage';

const table = 'people';

// const formatPeople = ({
//   _id,
//   name,
//   dni,
//   phone,
//   coments,
//   approver,
//   transBrand,
//   transColor,
//   transModel,
//   transPlaca,
// }) => ({
//   _id,
//   name: name !== undefined ? camelCase(name.trim()) : '',
//   dni: dni !== undefined ? dni.trim().toUpperCase() : '',
//   phone: phone !== undefined ? phone.trim() : '',
//   coments: coments !== undefined ? coments.trim() : '',
//   approver,
//   transBrand: transBrand !== undefined ? transBrand.trim().toUpperCase : '',
//   transColor: transColor !== undefined ? camelCase(transColor.trim()) : '',
//   transModel: transModel !== undefined ? camelCase(transModel.trim()) : '',
//   transPlaca: transPlaca != undefined ? transPlaca.trim().toUpperCase : '',
// });

export const listPeople = () => {
  try {
    const listStorage = getStorage(table);
    return listStorage;
  } catch (err) {
    console.error('listPeople - ', err.message);
    throw err;
  }
};

export const getOnePeople = (peopleID) => {
  try {
    const listStorage = getStorage(table);
    return listStorage.find((item) => item._id === peopleID);
  } catch (err) {
    console.error('getOnePeople - ', err.message);
    throw err;
  }
};

export const createPeople = (people) => {
  try {
    const listStorage = getStorage(table);
    const newPeople = {
      ...people,
      _id: uuidv4(),
    };
    const newList = [newPeople, ...listStorage];
    setStorage(table, newList);
    return newList;
  } catch (err) {
    console.error('createPeople - ', err.message);
    throw err;
  }
};

export const updatePeople = (people) => {
  try {
    const listStorage = getStorage(table);
    const listDeleteItem = listStorage.filter((item) => item._id !== people._id);
    const newList = [people, ...listDeleteItem];
    setStorage(table, newList);
    return newList;
  } catch (err) {
    console.error('updatePeople - ', err.message);
    throw err;
  }
};

export const deletePeople = (peopleID) => {
  try {
    const listStorage = getStorage(table);
    const listDeleteItem = listStorage.filter((item) => item._id !== peopleID);
    const newList = [...listDeleteItem];
    setStorage(table, newList);
    return newList;
  } catch (err) {
    console.error('deletePeople - ', err.message);
    throw err;
  }
};
