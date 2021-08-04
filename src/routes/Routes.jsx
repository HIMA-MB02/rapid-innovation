import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { LandingPage, AccountPage, PagesPage, DocumentationPage } from '../pages';

export const routes = {
    home: '/',
    landingPage: '/landing-page',
    accountPage: '/account-page',
    pagesPage: '/pages-page',
    documentationPage: '/documentation-page'
}

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from='/' to={routes.landingPage} />
            <Route exact component={LandingPage} path={routes.landingPage} />
            <Route exact component={AccountPage} path={routes.accountPage} />
            <Route exact component={PagesPage} path={routes.pagesPage} />
            <Route exact component={DocumentationPage} path={routes.documentationPage} />
        </Switch>
    );
};

export default Routes;
