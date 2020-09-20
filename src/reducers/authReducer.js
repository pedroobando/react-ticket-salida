import { typeAuth } from '../types/types';

// state = {
//   username: 'pedro',
//   logged: true,
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

    default:
      return state;
  }
};
