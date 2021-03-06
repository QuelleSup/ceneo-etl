import React from 'react';
import {Switch} from 'react-router-dom';
import {browserHistory, Route} from 'react-router';
import Home from '../containers/Home.js';
import Database from '../containers/Database.js';
import Transform from "../containers/Transform";
import ReviewsTable from '../containers/ReviewsTable.js';

export const HOME_URL = '/';
export const DATABASE_URL = '/database';
export const TRANSFORM_URL = '/transform';

export default function createRoutes() {
    return (
        <Switch>
            <Route exact path={HOME_URL} component={Home}/>
            <Route exact path={DATABASE_URL} component={Database}/>
            <Route exact path={TRANSFORM_URL} component={Transform}/>
            <Route path='/:id' component={ReviewsTable}/>
        </Switch>
    )
}