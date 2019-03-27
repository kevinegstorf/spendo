import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Menu, Goals, Transactions, Cards } from '../pages/';

import { Route } from './routes.interface';

const privateRoutes: Route[] = [
  {
    path: '/menu',
    exact: true,
    component: Menu,
    title: 'Menu'
  },
  {
    path: '/goals',
    exact: true,
    component: Goals,
    title: 'Goals'
  },
  {
    path: '/cards',
    exact: true,
    component: Cards,
    title: 'Cards'
  },
  {
    path: '/transactions',
    exact: true,
    component: Transactions,
    title: 'Transactions'
  }
];

export default privateRoutes;
