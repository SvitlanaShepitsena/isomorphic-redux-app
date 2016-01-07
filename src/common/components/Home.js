import React, { Component } from 'react';
import Articles from '../containers/ArticlesPage';
import {articlesGet} from '../actions/articles';


class Home extends Component {

    render() {
        return (
            <Articles/>

        );
    }
}

Home.need = [
    articlesGet
]
export default Home;