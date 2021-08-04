import React from 'react';
import { Redirect, Switch, Route, useLocation } from 'react-router-dom';
import {
  LandingPage,
  AccountPage,
  PagesPage,
  DocumentationPage,
} from '../pages';

export const routes = {
  home: '/',
  landingPage: '/landing-page',
  accountPage: '/account-page',
  pagesPage: '/pages-page',
  documentationPage: '/documentation-page',
};

const Routes = () => {
  const location = useLocation();
  const isRouteValid = (pathname) => {
    let isValid = false;
    Object.keys(routes).forEach((routeKey) => {
      if (routes[routeKey] === pathname) isValid = true;
    });
    return isValid;
  };
  return (
    <Switch>
      <Redirect exact from='/' to={routes.landingPage} />
      <Route exact component={LandingPage} path={routes.landingPage} />
      {isRouteValid(location.pathname) ? (
        <>
          <Route exact component={AccountPage} path={routes.accountPage} />
          <Route exact component={PagesPage} path={routes.pagesPage} />
          <Route
            exact
            component={DocumentationPage}
            path={routes.documentationPage}
          />
        </>
      ) : (
        <Redirect to='/' />
      )}
    </Switch>
  );
};

export default Routes;
