import React, {Component} from 'react';
import {Link} from 'react-router';

import Alert from '../components/Alert';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import Marketing from '../components/Marketing';
import Footer from '../components/Footer';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Nav/>
                {this.props.children}
                <Footer/>
            </div>
        );
    };
}