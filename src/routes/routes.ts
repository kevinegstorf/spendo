import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Login from '../pages/Login';
import { Route } from './routes.interface';

const routes: Route[] = [{ path: '/', exact: true, component: Login }];

export default routes;
