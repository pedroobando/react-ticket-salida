import { typeGState } from '../types/types';

// state = {
//   username: 'pedro',
//   logged: true,
//   list:[],
//   active:{}
// };

const removeItem = (id, list = []) => {
  return list.filter((item) => item._id !== id);
};

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
      };

    case typeGState.pplGetOne:
      return {
        ...state,
        active: action.payload.active,
        list: action.payload.list,
      };

    case typeGState.pplCreate:
      return {
        ...state,
        list: [...state.list, action.payload],
        active: {},
      };

    case typeGState.pplUpdate:
      const { _id } = action.payload;
      const newList = state.list.filter((item) => item._id !== _id);
      return {
        ...state,
        list: [action.payload, ...newList],
        active: {},
      };

    default:
      return state;
  }
};
