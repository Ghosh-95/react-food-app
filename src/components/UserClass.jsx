import React from "react";

export default class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log("Child component did mount");
    }

    render() {
        const { api, name, job, github } = this.props.userData;
        const { count } = this.state;

        return (
            <>
                <h2>Hey, I am {name}</h2>
                <p>I am a {job}</p>
                <h3>I've used {api} to fetch data and use them into component.</h3>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                    className="class-count">Count: {count}</button>
                <a target="_blank" href={github}><i className="fa-brands fa-github"></i></a>
            </>
        );
    }

}