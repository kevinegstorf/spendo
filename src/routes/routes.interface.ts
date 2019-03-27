import { RouteComponentProps } from 'react-router-dom';
export interface Route {
  path: string;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps>;
  title?: string;
}
