import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { GlobalLoading } from '../components'

import PrivateRouter from './PrivateRouter'
import PublishRouter from './PublishRouter';

const BasicLayout = lazy(() => import('../layouts/BasicLayout'));
const MinimalLayout = lazy(() => import('../layouts/MinimalLayout'));

const LoginPage = lazy(() => import('../views/Login'));
const HomePage = lazy(() => import('../views/Home'));
const About = lazy(() => import('../views/About'));
const Account = lazy(() => import('./../views/Account'));
const Setting = lazy(() => import('./../views/Setting'));
const AuthenticatedPage = lazy(() => import('./../views/Authenticated'));
const NotFoundPage = lazy(() => import('./../views/NotFound'));

export default function Router() {
    return (
        <Suspense fallback={<GlobalLoading size='large' />}>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <PrivateRouter
                    component={HomePage}
                    exact
                    layout={BasicLayout}
                    path='/home'
                />
                <PrivateRouter
                    component={About}
                    exact
                    layout={BasicLayout}
                    path='/about'
                />
                <PrivateRouter
                    component={Account}
                    exact
                    layout={BasicLayout}
                    path='/account'
                />
                <PrivateRouter
                    component={Setting}
                    exact
                    layout={BasicLayout}
                    path='/setting'
                />
                <PublishRouter
                    component={LoginPage}
                    exact
                    layout={MinimalLayout}
                    path="/login"
                    restricted={true}
                />
                <PublishRouter
                    component={AuthenticatedPage}
                    exact
                    layout={MinimalLayout}
                    path='/not-authenticated'
                    restricted={false}
                />
                <PublishRouter 
                    component={NotFoundPage}
                    exact
                    layout={MinimalLayout}
                    path="/not-found"
                    restricted={false}
                />
                <Redirect to='/not-found' />
            </Switch>
        </Suspense>
    )
}