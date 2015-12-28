import {ARTICLES_GET, ARTICLES_GET_SUCCESS, ARTICLES_GET_FAILURE, ADD_ARTICLE, REMOVE_ARTICLE} from '../actions/articles';

export default function articles(state = [], action) {

    switch (action.type) {

        case ARTICLES_GET:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ARTICLES_GET_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.articles
            });
        case ARTICLES_GET_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        case ADD_ARTICLE:
            /* es6 way of creating a new array with destruction*/
            return [action.payload, ...state];

        case REMOVE_ARTICLE:
            let index = action.payload;
            let before = state.slice(0, index);
            let after = state.slice(index + 1);
            return [...before, ...after];

        default:
            return state;
    }
}