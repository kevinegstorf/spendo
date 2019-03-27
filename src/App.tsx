import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Component } from 'react';
import routes from '../src/routes/routes';
import privateRoutes from '../src/routes/privateRoutes';
import PrivateLayout from '../src/pages/__layouts__/PrivateLayout';
import {
  Link,
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Router
} from 'react-router-dom';
import history from '../src/routes//history';

type Props = RouteComponentProps;

function App(props: Props) {
  React.useEffect(() => {
    const unsub = props.history.listen(location => {});

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="container">
      <Router history={history}>
        <main>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
            {privateRoutes.map(route => (
              <Route
                key={route.path}
                exact
                path={route.path}
                render={() => (
                  <PrivateLayout
                    component={route.component}
                    route={route.path}
                    title={route.title}
                  />
                )}
              />
            ))}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default hot(module)(withRouter(App));
