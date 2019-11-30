import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ProductsPage from '../pages/productsPage/ProductsPage';
import ServicesPage from '../pages/servicesPage/ServicesPage';
import DasmediaPage from '../pages/dasmediaPage/DasmediaPage';


const routes = [
    {
        path: '/AboutPage',
        component: AboutPage
    },
    {
        path: '/ProductsPage',
        component: ProductsPage
    },
    {
        path: '/ServicesPage',
        component: ServicesPage
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
