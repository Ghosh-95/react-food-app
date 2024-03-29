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
                <h2 className="mb-2">Hey, I am {name}</h2>
                <div className="flex items-center gap-8">
                    <img className="w-[18%] rounded-full" src={avatar_url} alt="sushovan ghosh" />
                    <p>{bio}</p>
                </div>
                <h3 className="mt-3 text-sm">I've used {api} to fetch data and use them into component.</h3>
                <a target="_blank" href={github} className="text-center mt-3"><i className="fa-brands fa-github text-white text-2xl"></i></a>
            </>
        );
    }

}