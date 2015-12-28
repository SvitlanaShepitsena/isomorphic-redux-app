import React from 'react';
import Radium from 'radium';
/*Styles*/
import colors from '../../settings/colors.js';
import layout from '../../settings/layout.js';
import typography from '../../settings/typography.js';

class AddVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label style={[styles.base]} htmlFor="videoUrl">Embed Video</label>
                <input
                    className="u-full-width"
                    type="text"
                    name="videoUrl"
                    placeholder="Video URL"/>
            </div>
        )
    }
}
;

var styles = {
    base: {
        color: colors.blue600
    }
};
export default Radium(AddVideo);
