import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { auth, common } from '../mock-routes';
import RegistrationContainer from '../modules/Registration/container';
import LoginContainer from '../modules/Login/container';
import Home from '../components/Home/Home';

export const useRoutes = (isAuthenticated) => {
if (isAuthenticated) {
    return (
        <Switch>
            <Route path={common.home()} exact >
            <Home/>
            </Route>
            <Redirect to={common.home()}/>
        </Switch>
    )
}else {
    return (
        <Switch>
            <Route path={auth.login()} exact>
            <LoginContainer/>
            </Route>
            <Route path={auth.registration()} exact>
            <RegistrationContainer/>
            </Route>
            <Redirect to={auth.login()}/>
        </Switch>
    )
}
}