import React from 'react';

export default class ArticleList extends React.Component {
    constructor(props) {
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.articles &&
                <ul>
                    {this.props.articles.map((article)=>
                        /* Each child in an array or iterator should have a unique "key" prop*/
                        <li key={article.key}>
                            <hr/>
                            {article.title}
                        </li>
                    )}
                </ul>}
            </div>
        )
    }
}