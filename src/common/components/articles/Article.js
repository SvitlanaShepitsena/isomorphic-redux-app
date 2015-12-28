import React from 'react';
import ArticleForm from './ArticleForm.js';
import ArticleList from './ArticleList.js';

export default class Article extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    componentDidMount() {
        this.props.articlesGet();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <div>
                <ArticleList articles={this.props.items}/>
            </div>
        )
    }
}