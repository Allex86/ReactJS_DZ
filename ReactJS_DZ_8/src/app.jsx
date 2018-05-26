import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

import store from './app/stores/store';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import Posts from './app/pages/Posts';
import Comments from './app/pages/Comments';
// import Comments from './app/components/Comments';
import Users from './app/pages/Users';
// import Users from './app/components/Users';
import Links from './app/pages/Links';
import PageNotFound from './app/pages/PageNotFound';

import Footer from './app/components/Footer';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="posts" component={Posts} />
            <Route path="comments" component={Comments} />
            <Route path="users" component={Users} />
            <Route path="links" component={Links} />
            <Route path="*" component={PageNotFound} />
        </Route>
        <Route path="*" component={PageNotFound} />
        <Footer/>
    </Router>
    </Provider>, app);