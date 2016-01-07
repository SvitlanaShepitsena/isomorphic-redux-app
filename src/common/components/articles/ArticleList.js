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
                <ul style={{listStyle:"none"}}>
                    {this.props.articles.map((article)=>
                        /* Each child in an array or iterator should have a unique "key" prop*/
                        <li key={article.key}>
                            <hr/>
                            <span style={{display:"inline-block", float:"left"}}>
                            <img style={{width:40,padding:5}}
                                 src="http://res.cloudinary.com/svitlana/image/upload/v1452030293/chicago-app/logo.png"
                                 alt="I am an image"/>
                            </span>
                            <span>
                            {article.title}
                            </span>
                        </li>
                    )}
                </ul>}
            </div>
        )
    }
}