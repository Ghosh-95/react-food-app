import UserClass from "./UserClass";
import { Component } from "react";

export default class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="w-[30rem] bg-gradient-to-t from-green-600 to-green-500 mx-auto my-[5rem] flex justify-center flex-col px-12 py-[1.2rem] text-white rounded-md shadow-md">
                <h1 className="text-center mb-2">About</h1>
                <p className="mb-[0.5rem] text-sm">This site is build with love while learning React. Design by Sushovan Ghosh</p>
                <UserClass userData={{ name: 'Sushovan Ghosh', job: 'Frontend Developer', github: "https://github.com/Ghosh-95", api: "Swiggy API" }} />
            </section>
        )
    }
}