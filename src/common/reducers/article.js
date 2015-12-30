import {ARTICLES_GET_REQUEST, ARTICLES_GET_SUCCESS, ARTICLES_GET_FAILURE, ADD_ARTICLE, REMOVE_ARTICLE} from '../actions/articles';

export default function article(state = {isFetching: true, articles: [], error: null}, action) {
    switch (action.type) {
        case ARTICLES_GET_REQUEST:
            /*ES6 Syntax for updating state with Object.assign(). */
            /* Create a new object, copy all props from old state and set isFetching to true */
            return Object.assign(
                {},
                state,
                {isFetching: true}
            );
        case ARTICLES_GET_SUCCESS:
            /* Resolve promise with articles and create a new state with fetching:false, and articles from db*/
            return Object.assign(
                {},
                state,
                {
                    isFetching: false,
                    articles: action.articles
                });
        case ARTICLES_GET_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    isFetching: false,
                    error: article.error
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