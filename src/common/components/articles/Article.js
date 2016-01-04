import React from 'react';
import Loader from './Loader.js';
import ArticleList from './ArticleList.js';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    /* This method runs when component just added to the real DOM*/
    componentDidMount() {
        this.props.articlesGet();
    }

    render() {
        const {isFetching,articles,error} = this.props;
        return (
            <div>
                {error && <div> Cannot get Data from Firebase </div> }
                {isFetching && <Loader/> }
                {!isFetching && <ArticleList articles={articles}/>}
            </div>
        )
    }
}

