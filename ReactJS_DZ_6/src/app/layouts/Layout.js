import React, {Component} from 'react';
import {Link} from 'react-router';

import Alert from '../components/Alert';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ButtonBackToTop from '../components/ButtonBackToTop';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                {/* <Alert/> */}
                <Nav/>
                {this.props.children}
                <ButtonBackToTop/>
                <Footer/>
            </div>
        );
    };
}