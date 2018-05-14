import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Comment extends Component {
    render() {

        let show_post = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.id} {this.props.name}
                    </h3>
                </div>
                <div className="panel-body">
                    <p>postId: {this.props.postId}</p>
                    <p>{this.props.body}</p>
                    <p>User mail:{this.props.email}</p>
                    <Link to={show_post}>Show Posts</Link>
                </div>
            </div>
        );
    }
}