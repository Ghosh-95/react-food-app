import User from "./User";
import UserClass from "./UserClass";
import "../css/about.css"

export default function About() {
    return (
        <section className="user-about">
            <h1>About</h1>
            <p>This site is build with love while learning React. Design by Sushovan Ghosh</p>
            <UserClass />

            <User />
        </section>
    )
}