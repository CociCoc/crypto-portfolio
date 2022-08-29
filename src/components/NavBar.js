export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Cryptopedia</a>
        <ul>
            <CustomLink href="Tokens"> Tokens </CustomLink>
            <CustomLink href="About"> About </CustomLink>
        </ul>
    </nav>
}
    function CustomLink({href, children, ...props }) {
        const path = window.location.pathname
            return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
            )
    }