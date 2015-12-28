import React from 'react';
import Radium from 'radium';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ArticlesActions from '../../actions/articles';

/*App Components*/
import UploadPictures from './article/UploadPictures';
import AddVideo from './article/AddVideo';
import Button from '../buttons/Button.js';

/*Styles*/
import layout from '../settings/layout.js';
import typography from '../settings/typography.js';

class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    addMyArticle(evt) {
        evt.preventDefault();

        var title = this.refs.title.getDOMNode().value;
        console.log(title);
        this.props.actions.addArticle({
            title: title,
            content: this.refs.content.getDOMNode().value
        });

        this.setState({title: "", content: ""});
    }

    updateLocalTitle(event) {
        this.setState({title: event.target.value});

    }

    updateLocalContent(event) {
        this.setState({content: event.target.value});

    }

    addArticleCut(event) {
        if (event.keyCode !== 13) {
            return;
        }
        this.addMyArticle(event);
    }

    render() {
        return (
            <div id="ArticleForm">
                <Radium.Style
                    scopeSelector="#ArticleForm"
                    rules={{
                textarea:{fontFamily:typography.fontFamilyComic},
                }}/>
                <h2>New Article</h2>
                <form >
                    <div className="row">
                        <div className="twelve columns">
                            <input
                                ref="title"
                                type="text"
                                style={[styles.base, styles.titleStyles]}
                                onKeyUp={this.addArticleCut.bind(this)}
                                placeholder="Article Title"
                                value={this.state.title}
                                onChange={this.updateLocalTitle.bind(this)}
                            />
                        </div>
                    </div>
                    <textarea
                        ref="content"
                        className="u-full-width "
                        type="text"
                        style={[styles.base, styles.contentStyles]}
                        placeholder="Article Content"
                        onKeyUp={this.addArticleCut.bind(this)}
                        value={this.state.content}
                        onChange={this.updateLocalContent.bind(this)}
                    >
                    </textarea>
                    <Button size="md" click={this.addMyArticle.bind(this)}>Submit</Button>
                </form>
            </div>
        )
    }
}
;

var styles = {
    base: {
        marginBottom: 10,
    },
    titleStyles: {
        color: '#1E88E5',
        lineHeight: 1.5,
        padding: layout.padding5,
        width: '100%'
    },
    contentStyles: {
        display: 'block',
        height: '100%',
        padding: layout.padding5,
        minHeight: 200
    }
};
/*hook up component to the Redux Store*/
function mapDispatchToProps(dispatch) {
    /* Decorate Actions with access to dispatch method of Redux Store */
    return {
        actions: bindActionCreators(ArticlesActions, dispatch)
    };
}
/*the connect() lets you specify which exact state from the Redux store your component wants to track*/
export default connect(null, mapDispatchToProps)(Radium(ArticleForm));
