import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile } from '../components/Profile';
import { Settings } from '../components/Settings';
import { User } from '../components/User';
 

export const Homepage = () => {
    return <Switch>
        <Route path="/user" component={User}></Route>
        <Route path="/profile"component={Profile}></Route>
        <Route path="/settings"component={Settings}></Route>
    </Switch>
}