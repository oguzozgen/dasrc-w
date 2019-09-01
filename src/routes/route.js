import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import DasmediaPage from '../pages/dasmediaPage/DasmediaPage';


const routes = [
    {
        path: '/AboutPage',
        component: AboutPage
    },
    {
        path: '/DasmediaPage',
        component: DasmediaPage
    },
    {
        path: '/',
        component: HomePage
    }
];

export const Routes = () => {
    return (
        <div>
            <Switch>
                {routes.map((route, index) => <Route path={route.path} component={route.component} key={index} />)}
            </Switch>
        </div>
    );
};
