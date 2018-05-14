import React, {Component} from 'react';
import {Link} from 'react-router';

export default class User extends Component {
    render() {

        let show_posts = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`;
        
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.username}
                    </h3>
                </div>
                <div className="panel-body">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                    <Link to={show_posts}>Show Posts</Link>
                </div>
            </div>
        );
    }
}