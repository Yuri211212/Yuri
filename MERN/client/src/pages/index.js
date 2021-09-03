import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/Home/Home';
import { auth, common } from '../mock-routes/index';

import LoginContainer from '../modules/Login/container/index';
import RegistrationContainer from '../modules/Registration/container/index';

export const useRoutes = (isAuthenticated) => {
if (isAuthenticated) {
    return (
        <Switch>
            <Route path={common.home()} exact>
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