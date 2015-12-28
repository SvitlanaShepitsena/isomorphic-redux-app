import React, { Component } from 'react';
import Radium from 'radium';
import ButtonLink from './buttons/link/ButtonLink.js';

class Blog extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="posts">

                <ButtonLink url="/add-article" cssClass="button-primary" size="md" kind="success">
                    Add Article
                </ButtonLink>

                <h1 className="post-title">Blog</h1>
            </div>

        );
    }
}
export default Radium(Blog);
