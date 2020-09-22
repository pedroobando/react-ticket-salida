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
        active: action.payload,
      };

    case typeGState.pplCreate:
      return {
        ...state,
        list: action.payload,
        active: {},
      };

    case typeGState.pplUpdate:
      return {
        ...state,
        list: action.payload,
        active: {},
      };

    default:
      return state;
  }
};
