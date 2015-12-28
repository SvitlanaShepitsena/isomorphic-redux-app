import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from '../components/todo/Todo';
import * as TodoActions from '../actions/todos';

/*connect a component to a store*/
function mapStateToProps(state) {
    return {
        todos: state.todos.present
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);