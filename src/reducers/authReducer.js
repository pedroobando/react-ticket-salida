import { typeAuth } from '../types/types';

// state = {
//   username: 'pedro',
//   logged: true,
//   list:[],
//   active:{}
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case typeAuth.login:
      return {
        username: action.payload,
        logged: true,
      };

    case typeAuth.logout:
      return {
        logged: false,
      };

    case typeAuth.pplLists:
      return {
        ...state,
        active: {},
      };

    case typeAuth.pplGetOne:
      return {
        ...state,
        active: action.payload,
      };

    case typeAuth.pplCreate:
      return {
        ...state,
        list: [...state.list, action.payload],
        active: {},
      };

    default:
      return state;
  }
};
