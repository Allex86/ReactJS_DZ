import { EventEmitter } from 'events';
import {ADD_COMMENT, FETCH_COMMENTS_START, FETCH_COMMENTS_END} from "../constants/commentsConstants";
import dispatcher from '../dispatcher';
import axios from 'axios';

class CommentsStore extends EventEmitter {
    constructor()
    {
        super(...arguments);

        this.comments = []; //Для хранения комментариев

        this.fetchCommentsStart = this.fetchCommentsStart.bind(this);
        this.fetchCommentsEnd = this.fetchCommentsEnd.bind(this);
        this.change = this.change.bind(this);
        this.addComment = this.addComment.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchCommentsStart()
    {
        //axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => {
                dispatcher.dispatch({
                    type: FETCH_COMMENTS_END,
                    payload: response.data
                });
            });
    }

    fetchCommentsEnd(comments)
    {
        this.comments = comments;
        this.change();
    }

    change()
    {
        this.emit('change', this.comments);
    }

    addComment(comment)
    {
        this.comments.push(comment);
        this.change();
    }

    handleActions(action)
    {
        switch (action.type)
        {
            case ADD_COMMENT: {
                this.addComment(action.payload);
                break;
            }
            case FETCH_COMMENTS_START: {
                this.fetchCommentsStart();
                break;
            }
            case FETCH_COMMENTS_END: {
                this.fetchCommentsEnd(action.payload);
                break;
            }
        }
    }
}

const cS = new CommentsStore;
dispatcher.register(cS.handleActions);
export default cS;