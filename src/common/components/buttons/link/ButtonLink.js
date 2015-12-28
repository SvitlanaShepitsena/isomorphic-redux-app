import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';
import elements from '../../settings/elements.js';

class ButtonLink extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

        require('./ButtonLinkStyles.css');
    }

    render() {
        return (
            <div>
                <Link className={`${this.props.cssClass} link-button`} to={this.props.url}>
                    {this.props.children}
                </Link>
            </div>
        )
    }

}
export default Radium(ButtonLink);
