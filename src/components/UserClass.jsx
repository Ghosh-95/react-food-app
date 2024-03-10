import React from "react";

export default class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h3>I've used {this.props.api} to fetch data and use them into component.</h3>
            </>
        );
    }

}