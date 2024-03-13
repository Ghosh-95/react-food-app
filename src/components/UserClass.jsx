import React from "react";

export default class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '...loading',
                bio: '...loading',
                avatar_url: ''
            },
        }
    }

    async componentDidMount() {
        const response = await fetch('https://api.github.com/users/Ghosh-95');
        const data = await response.json();

        this.setState({
            userInfo: data,
        });
    }

    render() {
        const { api, github } = this.props.userData;
        const { name, bio, avatar_url } = this.state?.userInfo;

        return (
            <>
                <h2>Hey, I am {name}</h2>
                <div className="bio-container">
                    <img className="avatar-url" src={avatar_url} alt="sushovan ghosh" />
                    <p>{bio}</p>
                </div>
                <h3>I've used {api} to fetch data and use them into component.</h3>
                <a target="_blank" href={github}><i className="fa-brands fa-github"></i></a>
            </>
        );
    }

}