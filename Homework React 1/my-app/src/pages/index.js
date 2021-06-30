import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Settings } from '../components/Settings';
import { User } from '../components/User';
import ProfileContainer from '../container/ProfileContainer'

export const Homepage = () => {
    return <Switch>
        <Route path="/user" component={User}></Route>
        <Route path="/profile" component={ProfileContainer}></Route>
        <Route path="/settings" component={Settings}></Route>
    </Switch>
}