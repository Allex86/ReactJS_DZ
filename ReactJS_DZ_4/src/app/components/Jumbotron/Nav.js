import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav>
               <ul className="nav nav-pills pull-right">
            		<li role="presentation" className="active"><a href="#">Home</a></li>
            		<li role="presentation"><a href="#">About</a></li>
            		<li role="presentation"><a href="#">Contact</a></li>
          		</ul>
          		<h3 className="text-muted">Project name</h3>
            </nav>
        );
    };
}