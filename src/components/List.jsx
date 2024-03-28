export default function ListAnchor({ href, children, icon }) {
    return (
        <li className="transition-all hover:scale-110 cursor-pointer">
            <a href={href}>
                <i className={`fa-brands fa-${icon} mr-1`}></i>{children}
            </a>
        </li>
    )
}