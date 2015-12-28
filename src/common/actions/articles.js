export const ADD_ARTICLE = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

/*Action Creator functions*/
export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        payload: article
    };
}
export function removeArticle(index) {
    return {
        type: REMOVE_ARTICLE,
        payload: index
    };
}


