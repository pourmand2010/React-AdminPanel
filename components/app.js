
const {
    Switch,
    browserHistory,
    Route,
    Link,
    Redirect,
    IndexRoute
} = ReactRouterDOM;
const { useEffect, useRef, useState, useCallback } = React;

const Router = ReactRouterDOM.HashRouter;
const { renderToString } = ReactDOMServer;
const styled = window.styled;


function AppModule() {
    // console.log(useEffect, useRef, useState, useCallback)
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>

    );
}
ReactDOM.render(
    <AppModule />,
    document.getElementById('myApp')
)

