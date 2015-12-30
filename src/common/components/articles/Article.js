import React from 'react';
import Loader from './Loader.js';
import ArticleList from './ArticleList.js';

export default class Article extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    /* This method runs when component just added to the real DOM*/
    componentDidMount() {
        if (!this.props.articles.length) {

            this.props.articlesGet();
        }
    }

    render() {
        const {isFetching,articles,error} = this.props;
        return (
            <div>
                {isFetching && <Loader/> }
                {!isFetching && <ArticleList articles={articles}/>}
            </div>
        )
    }
}