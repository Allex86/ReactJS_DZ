import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import Posts from './app/pages/Posts';
import Comments from './app/pages/Comments';
import Users from './app/pages/Users';
import Links from './app/pages/Links';
import PageNotFound from './app/pages/PageNotFound';

import Footer from './app/components/Footer';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="posts" component={Posts} />
            <Route path="comments" component={Comments} />
            <Route path="users" component={Users} />
            <Route path="links" component={Links} />
            <Route path="*" component={PageNotFound} />
        </Route>
        <Footer/>
    </Router>, app);