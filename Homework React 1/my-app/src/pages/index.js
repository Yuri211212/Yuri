import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Settings } from '../components/Settings';
import { User } from '../components/User';
import TaskContainer from '../container/TaskContainer'

export const Homepage = () => {
    return <Switch>
        <Route path="/user" component={User}></Route>
        <Route path="/profile" component={TaskContainer}></Route>
        <Route path="/settings" component={Settings}></Route>
    </Switch>
}