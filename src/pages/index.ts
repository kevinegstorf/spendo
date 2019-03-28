export { default as Login } from "./Login";
export { default as Transactions } from "./Transactions";
export { default as Menu } from "./Menu";
export { default as Cards } from "./Cards";
export { default as Goals } from "./Goals";

/*
 * PAGE REDUCERS
 */

import { combineReducers } from "redux";

import cardsPageReducer from "./Cards/state";
import transactionsPageReducer from "./Transactions/state";

export const pageReducers = combineReducers({
  cards: cardsPageReducer,
  transactions: transactionsPageReducer
});
