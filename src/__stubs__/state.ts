import banks from "./banks";
import cards from "./cards";
import customer from "./customer";
import transactions from "./transactions";

const state: State = {
  auth:{user: {}},
  banks,
  customer,
  pages: {
    cards: {
      loading: false,
      error: false,
      cards
    },
    transactions: {
      loading: false,
      error: false,
      transactions
    }
  }
};

export default state;
