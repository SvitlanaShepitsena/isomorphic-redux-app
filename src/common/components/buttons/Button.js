import React from 'react';
import Radium from 'radium';
/*Styles*/
import colors from '../settings/colors.js';
import elements from '../settings/elements.js';
import typography from '../settings/typography.js';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="ButtonWrapper" style={[styles.wrapper]}>
                {/*binding this from DOM environment to the Component.:: - ES7 */}
                <button key="articleBtn" onClick={this.props.click}
                        style={[styles.base,
                        styles[this.props.type],
                        styles[this.props.size],
                        styles[this.props.kind] ]}>
                    {this.props.children}
                </button>
                {Radium.getState(this.state, 'articleBtn', ':hover') ? (
                    <span style={[styles.tip, this.props.tip && styles.tipBase]}>
                        {this.props.tip || "Give me some tip!"}
                </span>
                ) : null}
            </div>
        )
    }

}
var styles = {
    wrapper: {
        position: 'relative',
        //background: colors.purple200,
        width: 'auto',
        height: 'auto'
    },
    tipBase: {
        //padding: '4px 6px',
    },
    tip: {
        padding: '4px 6px',
        position: 'relative',
        fontSize: 12,
        background: colors.grey700,
        color: colors.grey50,
        width: 'auto',
        height: 'auto',
        top: -30,
        left: 0
    },
    base: {
        display: 'inline-block',
        marginBottom: 4,
        height: '38px',
        textAlign: 'center',
        fontWeight: 500,
        letterSpacing: '.1rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        borderRadius: '4',
        border: '1px solid #bbb',
        boxSizing: 'border-box',
        cursor: 'pointer',
        ':hover': {
            boxShadow: elements.shadowBtnHover,
        }
    },
    default: {
        background: colors.grey500,
        color: colors.grey50,
        boxShadow: elements.shadowBtn,
        fontWeight: 500,
        width: 'auto',
        '@media (max-width: 992px)': {
            minWidth: '100%'
        },
        ':hover': {
            background: colors.grey600,
        },
        ':focus': {
            background: colors.grey600
        },
        ':active': {
            background: colors.grey50
        }

    },
    primary: {
        border: 0,
        background: colors.blue500,
        color: colors.blue50,
        ':hover': {
            background: colors.blue700
        },
        ':focus': {
            background: colors.blue700
        },
        ':active': {
            background: colors.blue700
        }
    },
    success: {
        background: colors.green500,
        color: colors.green50,
        ':hover': {
            background: colors.green700
        },
        ':focus': {
            background: colors.green700
        },
        ':active': {
            background: colors.green700
        }
    },
    warning: {
        background: colors.orange500,
        color: colors.orange50,
        ':hover': {
            background: colors.orange700
        },
        ':focus': {
            background: colors.orange700
        },
        ':active': {
            background: colors.orange700
        }
    },
    danger: {
        background: colors.red500,
        color: colors.red50,
        ':hover': {
            background: colors.red700
        },
        ':focus': {
            background: colors.red700
        },
        ':active': {
            background: colors.red700
        }
    },
    xl: {
        height: 56,
        paddingLeft: 26,
        paddingRight: 26,
        lineHeight: 1.5,
        fontSize: 16
    },
    lg: {
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        lineHeight: 1.3,
        fontSize: 14
    },
    md: {
        height: 36,
        paddingLeft: 14,
        paddingRight: 14,
        lineHeight: 1,
        fontSize: 13
    },
    sm: {
        height: 30,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 12,
        lineHeight: .8,
    },
    xs: {
        height: 24,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 11,
        lineHeight: .6,
    },

};

export default Radium(Button);
