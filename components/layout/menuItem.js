class MenuItems extends React.Component {
    render() {
        return <ul className="nav nav-treeview">
            {
                this.props.children.map((childitem) =>
                    <li className="nav-item">
                        <Link to={childitem.path} className="nav-link">
                            <i className={"nav-icon " + childitem.icon}></i>
                            <p>
                                {childitem.title}
                            </p>
                        </Link>
                    </li>
                )
            }
        </ul>
    }
}
