import React, {Component} from 'react';
import Nav from './Nav';
import NewNav from './NewNav';
import Jumbotron from './Jumbotron';
import Marketing from './Marketing';
import Footer from './Footer';

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                <NewNav/>
                <Jumbotron/>
                <Marketing/>
                <Footer/>
            </div>
        );
    };
}