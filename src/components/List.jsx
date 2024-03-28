export default function ListAnchor({ href, children }) {
    return (
        <li className="transition-all hover:scale-110 cursor-pointer"><a href={href}>{children}</a></li>
    )
}