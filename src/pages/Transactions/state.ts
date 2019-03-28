import { Dispatch } from "redux";
import transactionsStub from "../../__stubs__/transactions";

/*
 * ACTION TYPES
 */

export const FETCH_TRANSACTIONS_LOADING = "FETCH_TRANSACTIONS_LOADING";
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS";
export const FETCH_TRANSACTIONS_ERROR = "FETCH_TRANSACTIONS_ERROR";

/*
 * ACTIONS
 */

export const fetchTransactions = () => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_TRANSACTIONS_LOADING });

  setTimeout(() => {
    dispatch({ type: FETCH_TRANSACTIONS_SUCCESS, data: transactionsStub });
  }, 3000);
};

/*
 * INITIAL STATE
 */

const initialState: State["pages"]["transactions"] = {
  transactions: [],
  loading: false,
  error: false
};

/*
 * REDUCER
 */

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case FETCH_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        transactions: action.data,
        loading: false,
        error: true
      };
    }
    case FETCH_TRANSACTIONS_ERROR: {
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
