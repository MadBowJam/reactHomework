import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Users from "./components/Users/users";
import Albums from "./components/Albums/album";
import Nav from "./components/Nav";

const App = () => {
    return(
        <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/users' component={Users} />
                    <Route exact path='/Albums' component={Albums} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
