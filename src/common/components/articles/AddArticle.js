import React from 'react';
import ArticleForm from './ArticleForm.js';

export default class AddArticle extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        return (
            <div>
                <ArticleForm></ArticleForm>
            </div>
        )
    }
}