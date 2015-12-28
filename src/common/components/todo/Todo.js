import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Section from './Section';

class Todo extends Component {
    render() {
        const { todos, actions } = this.props;
        return (
            <div className="todocontainer">
                <Header addTodo={actions.addTodo}/>
                <Section todos={todos} actions={actions}/>
            </div>
        );
    }
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todo;