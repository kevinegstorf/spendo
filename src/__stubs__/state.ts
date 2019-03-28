import banks from "./banks";
import cards from "./cards";
import customer from "./customer";

const state: State = {
  banks,
  cards: {
    loading: false,
    error: false,
    cards
  },
  customer
};

export default state;
