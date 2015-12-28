import React from 'react';

export default class ArticleList extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }



    render() {
        return (
            <div>
                {this.props.articles && <ul>
                    {this.props.articles.map(article=><li>{article.title}</li>)}
                </ul>}
            </div>
        )
    }
}