
class MenuSiderBar extends React.Component {
    render() {
        return <aside className="main-sidebar elevation-4 sidebar-dark-maroon">
            <a href="index3.html" className="brand-link">
                <img src="/dist/images/AdminLogo.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                <span className="brand-text font-weight-light">Zurvan</span>
            </a>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column nav-flat text-sm" >
                        {
                            this.props.menu.map((item) => {
                                if (item.children) {
                                    return <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link" onClick={toggle}>
                                            <i className={"nav-icon " + item.icon}></i>
                                            <p>
                                                {item.title}
                                                <i className="left fas fa-angle-left"></i>
                                            </p>
                                        </a>
                                        <MenuItems children={item.children} />
                                    </li>
                                }
                                else {
                                    return <li className="nav-item">
                                        <Link to={item.path} className="nav-link">
                                            <i className={"nav-icon " + item.icon}></i>
                                            <p>
                                                {item.title}
                                            </p>
                                        </Link>
                                    </li>
                                }
                            })
                        }
                    </ul>
                </nav>
            </div>
        </aside>
    }
}