import UserClass from "./UserClass";
import { Component } from "react";
import "../css/about.css"

export default class About extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // console.log("Parent component did mount");
    }

    render() {
        return (
            <section className="user-about">
                <h1>About</h1>
                <p>This site is build with love while learning React. Design by Sushovan Ghosh</p>
                <UserClass userData={{ name: 'Sushovan Ghosh', job: 'Frontend Developer', github: "https://github.com/Ghosh-95", api: "Swiggy API" }} />
            </section>
        )
    }
}