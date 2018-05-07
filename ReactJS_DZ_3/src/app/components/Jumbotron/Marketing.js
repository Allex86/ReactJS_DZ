import React, {Component} from 'react';
import Col_lg_6 from './Col_lg_6';

export default class Marketing extends Component {
    render() {
        return (
            <div className="row marketing">
               <Col_lg_6/>
               <Col_lg_6/>
            </div>
        );
    };
}