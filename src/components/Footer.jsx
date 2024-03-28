import ListAnchor from "./List";

export default function Footer() {
    return (
        <footer className="w-full bg-[#ee5732] text-white flex justify-around py-3">
            <ul>
                <ListAnchor>Instagram</ListAnchor>
                <ListAnchor>YouTube</ListAnchor>
                <ListAnchor>Twitter</ListAnchor>
            </ul>
            <ul>
                <li>Copyright @ 2024</li>
                <li>spoon86@gmail.com</li>
            </ul>
        </footer>
    )
}