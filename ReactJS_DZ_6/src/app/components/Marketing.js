import React, {Component} from 'react';
import Subheading from './Subheading';

export default class Marketing extends Component {
    render() {
        return (
            <div className="row marketing">
               <Subheading/>
               <Subheading/>
            </div>
        );
    };
}