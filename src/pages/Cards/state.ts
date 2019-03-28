import { Dispatch } from "redux";
import cardsStub from "../../__stubs__/cards";

/*
 * ACTION TYPES
 */

export const FETCH_CARDS_LOADING = "FETCH_CARDS_LOADING";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR";

/*
 * ACTIONS
 */

export const fetchCards = () => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CARDS_LOADING });

  setTimeout(() => {
    dispatch({ type: FETCH_CARDS_SUCCESS, data: cardsStub });
  }, 3000);
};

/*
 * INITIAL STATE
 */

const initialState: State["pages"]["cards"] = {
  cards: [],
  loading: false,
  error: false
};

/*
 * REDUCER
 */

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CARDS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case FETCH_CARDS_SUCCESS: {
      return {
        ...state,
        cards: action.data,
        loading: false,
        error: true
      };
    }
    case FETCH_CARDS_ERROR: {
      return {
        ...state,
        cards: [],
        loading: false,
        error: true
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
