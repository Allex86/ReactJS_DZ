import React, {Component} from 'react';
import {Link} from 'react-router';

import Alert from './Alert';
import Nav from './Nav';
import NewNav from './NewNav';
import Jumbotron from './Jumbotron';
import Marketing from './Marketing';
import Footer from './Footer';

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                <Alert/>
                <NewNav/>
                <Jumbotron/>
                <Marketing/>
                <Footer/>
            </div>
        );
    };
}