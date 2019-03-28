import { Category, Currency } from "../enums";

const transactions: ReadonlyArray<Transaction> = [
  {
    id: "adbc",
    name: "SLACK",
    logoUrl: "https://logo.clearbit.com/slack.com",
    category: Category.SOFTWARE,
    date: "01-03-2019 12:00",
    balance: {
      currency: Currency.EURO,
      amount: -21.5
    }
  },
  {
    id: "abcd",
    name: "UBER",
    logoUrl: "https://logo.clearbit.com/uber.com",
    category: Category.TRAVEL,
    date: "01-03-2019 14:00",
    balance: {
      currency: Currency.EURO,
      amount: -49
    }
  },
  {
    id: "abcd",
    name: "Starbucks",
    logoUrl: "https://logo.clearbit.com/starbucks.com",
    category: Category.FOOD,
    date: "31-02-2019 16:00",
    balance: {
      currency: Currency.EURO,
      amount: -4.5
    }
  },
  {
    id: "abcd",
    name: "Delta",
    logoUrl: "https://logo.clearbit.com/delta.com",
    category: Category.TRAVEL,
    date: "31-02-2019 15:43",
    balance: {
      currency: Currency.EURO,
      amount: -44.5
    }
  }
];

export default transactions;
