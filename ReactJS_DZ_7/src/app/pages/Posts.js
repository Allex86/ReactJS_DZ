import React, {Component} from 'react';
import PostsList from '../components/PostsList';

import {fetchPosts} from '../actions/postsActions.js';
import {connect} from 'react-redux';

class Posts extends Component
{
	constructor() {
        super(...arguments);

        let posts = fetchPosts();
        this.props.dispatch(posts);
    }

   render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (this.props.is_fetching ?
                            (<div>
                                <p>Идёт загрузка . . .</p>
                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true" />
                            </div>):
                            <PostsList posts={this.props.posts} />
                        ) :
                        (this.props.children)
                }
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_fetching: store.posts.is_fetching
    };
}

export default connect(mapStateToProps)(Posts);