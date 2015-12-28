import {ADD_ARTICLE, REMOVE_ARTICLE} from '../actions/articles';

export default function articles(state = [], action) {
    switch (action.type) {
        case ADD_ARTICLE:
            //var newState=[];
            //newState.push(action.payload);
            //for (var i = 0; i < state.length; i++) {
            //    var article = state[i];
            //    newState.push(article);
            //}
            //return newState;

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