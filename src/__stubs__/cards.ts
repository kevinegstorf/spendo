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

const cards: ReadonlyArray<Card> = [
  {
    bankId: "gh.29.nl",
    bankCardNumber: "NL90INGB123456789",
    nameOnCard: "dhr. J. Mitchell",
    validFromDate: "2017-09-19",
    expiresDate: "2020-09-19",
    transactions
  },
  {
    bankId: "gh.29.uk",
    bankCardNumber: "NL90INGB923714323",
    nameOnCard: "dhr. J. Mitchell",
    validFromDate: "2017-10-10",
    expiresDate: "2020-10-10",
    transactions
  }
];

export default cards;
