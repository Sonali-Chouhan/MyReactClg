import {login_user} from "../Type";
const initialState = {
  List: [],
  
};
export const reducer = function (state = initialState, action) {
 
  switch (action.type) {
    
    case login_user:
     return {
        ...state,
        List: action.payload,
      };

    default:
      return state;
  }
};
