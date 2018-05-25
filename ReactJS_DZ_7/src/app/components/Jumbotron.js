import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
              <h1>Jumbotron heading</h1>
              <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><Link className="btn btn-lg btn-success" to="/" role="button">Sign up today</Link></p>
            </div>
        );
    };
}