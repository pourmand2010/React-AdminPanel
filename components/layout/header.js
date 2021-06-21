function Header() {
    return <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
            <li>
                <div className="dropdown">
                    <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-chevron-down"></i>
                        <span className="d-none d-xl-inline-block ml-2 mr-1">سارا </span>
                        <img src="/dist/images/avatar-1.3921191a.jpg" className="rounded-circle header-profile-user" alt="Header Avatar" />
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Dashboard</a>
                        <a className="dropdown-item" href="#">Edit Profile</a>
                        <a className="dropdown-item" href="#">Log Out</a>
                    </div>
                </div>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
        </ul>
    </nav>
}   
