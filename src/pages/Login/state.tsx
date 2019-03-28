import { Dispatch } from "redux";

export const UPDATE_USER = 'UPDATE_USER';
export const RESET_USER = 'RESET_USER';

export const updateUser = (payload:any) => (dispatch: Dispatch) => {
    dispatch({type: UPDATE_USER, payload})
}

const initialState = {user: null};

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case UPDATE_USER:
        return {...state, user: {...action.payload}};
      case RESET_USER:
        return initialState;
      default:
        return state;
    }
  }