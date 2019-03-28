/// <reference types="react-scripts" />

interface Bank {
  id: string;
  shortName: string;
  fullName: string;
  logo: string;
  website: string;
}

interface Card {
  bankId: string;
  bankCardNumber: string;
  nameOnCard: string;
  validFromDate: string;
  expiresDate: string;
}

interface Customer {
  address: {
    line_1: "No 1 the Road";
    line_2: "The Place";
    line_3: "The Hill";
    city: "Berlin";
    county: "";
    state: "Brandenburg";
    postcode: "13359";
    country_code: "DE";
  };
}

interface Balance {
  currency: Currency;
  amount: number;
}

interface Transaction {
  id: string;
  name: string;
  logoUrl: string;
  category: Category;
  date: string;
  balance: Balance;
}

// MARK: app state types

interface State {
  customer: Customer;
  banks: ReadonlyArray<Bank>;
  pages: {
    cards: {
      loading: boolean;
      error: boolean;
      cards: ReadonlyArray<Card>;
    };
    transactions: {
      loading: boolean;
      error: boolean;
      transactions: ReadonlyArray<Transaction>;
    };
  };
}
