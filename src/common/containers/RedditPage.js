import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Reddit from '../components/reddit/Reddit';
import * as RedditActions from '../actions/reddit';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
Reddit.need = [
  RedditActions.fetchPosts
]
/* Binds Store and Dumb component, so it can get access via (this.props) to the store data. */
function mapStateToProps(state) {
  let { selectedReddit, postsByReddit } = state;
  selectedReddit = selectedReddit.present;
  postsByReddit = postsByReddit.present;
  const {
    isFetching,
    lastUpdated,
    error,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    error:{},
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated,
    error
  };
}
/* Binds actions to the store dispatch methods,
so dumb component can react on user actions and dispatch them */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(RedditActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Reddit);