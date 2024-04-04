import ListAnchor from "./List";

export default function Footer() {
    return (
        <footer className="w-full bg-[#FA7070] text-[#FEFDED] flex justify-around py-3">
            <ul>
                <ListAnchor icon={"instagram"}>Instagram</ListAnchor>
                <ListAnchor icon={"youtube"}>YouTube</ListAnchor>
                <ListAnchor icon={"twitter"}>Twitter</ListAnchor>
            </ul>
            <ul>
                <li>Copyright @ 2024</li>
                <li>spoon86@gmail.com</li>
            </ul>
        </footer>
    )
}