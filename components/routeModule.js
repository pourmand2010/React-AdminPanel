
function RouterModule(menuList) {
    var listchildren = [];
    menuList.filter(x => x.path && x.component).map(x => listchildren.push(x));
    menuList.filter(x => x.children).map(x => x.children.map(c => listchildren.push(c)));
    return listchildren.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
}