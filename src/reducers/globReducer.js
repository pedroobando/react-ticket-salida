import { setStorage } from '../data/dataStorage';
import { typeGState } from '../types/types';

// state = {
//   username: 'pedro',
//   logged: true,
//   list:[],
//   active:{}
// };

export const globReducer = (state = {}, action) => {
  switch (action.type) {
    case typeGState.login:
      return {
        username: action.payload,
        logged: true,
      };

    case typeGState.logout:
      return {
        logged: false,
      };

    case typeGState.pplLists:
      return {
        ...state,
        active: {},
        list: action.payload,
      };

    case typeGState.pplGetOne:
      return {
        ...state,
        active: action.payload,
      };

    case typeGState.pplAddNew:
      return {
        ...state,
        list: [],
        active: {},
      };

    case typeGState.pplCreate:
      setStorage('people', [action.payload.active, ...action.payload.list]);
      return {
        ...state,
        list: [action.payload.active, ...action.payload.list],
        active: {},
      };

    case typeGState.pplUpdate:
      const { _id } = action.payload.active;
      const newList = action.payload.list.filter((item) => item._id !== _id);
      setStorage('people', [action.payload.active, ...newList]);
      return {
        ...state,
        list: [action.payload.active, ...newList],
        active: {},
      };

    default:
      return state;
  }
};
