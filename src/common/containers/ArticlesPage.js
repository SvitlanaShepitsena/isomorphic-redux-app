import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ArticleActions from '../actions/articles';
import Article from '../components/articles/Article';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
Article.need = [
    ArticleActions.articlesGet
]
/* Binds Store and Dumb component, so it can get access via (this.props) to the store data. */
function mapStateToProps(state) {
    return state.article;

}
/* Binds actions to the store dispatch methods,
 so dumb component can react on user actions and dispatch them */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ArticleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);