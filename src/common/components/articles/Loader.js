import React from 'react';

export default class Loader extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
    }
    /* This method is run when component just added to the real DOM*/

    render() {
        return (
            <div>
                Loading.......
            </div>
        )
    }
}