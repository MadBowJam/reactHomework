import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './components/Home';
import Popular from "./components/Popular";
import Battle from './components/Battle';
import Nav from "./components/Nav";
import { Box } from '@mui/system';

const App = () => (
            <Router>
                <Box>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/popular' component={Popular} />
                        <Route exact path='/battle' component={Battle} />
                        <Route exact path='/battle/results' component={Home} />
                    </Switch>
                </Box >
            </Router>
        )

export default App;
