import { getStorage, setStorage } from '../data/dataStorage';
import { AppContext } from '../reducers/AppContext';
import { typeGState } from '../types/types';

const table = 'people';
const { dispatch } = useContext(AppContext);

export const listPeople = () => {
  try {
    const listStorage = getStorage(table);
    dispatch({
      type: typeGState.pplLists,
      payload: listStorage,
    });
    return listStorage;
  } catch (err) {
    console.error('listPeople - ', err.message);
    throw err;
  }
};

export const addNewPeople = () => {
  try {
    dispatch({
      type: typeGState.pplAddNew,
    });
  } catch (err) {
    console.error('addNewPeople - ', err.message);
    throw err;
  }
};

// const handleSelect = (peopleID) => {
//   const peopleItem = lstPeople.find((item) => item._id === peopleID);
//   dispatch({
//     type: typeGState.pplGetOne,
//     payload: { active: peopleItem, list: lstPeople },
//   });
//   history.push(`/datos/persona/${peopleID}`);
// };

export const getOnePeople = (peopleID) => {
  try {
    const listStorage = getStorage(table);
    const peopleActive = listStorage.find((item) => item._id === peopleID);
    dispatch({
      type: typeGState.pplGetOne,
      payload: peopleActive,
    });
  } catch (err) {
    console.error('getOnePeople - ', err.message);
    throw err;
  }
};
