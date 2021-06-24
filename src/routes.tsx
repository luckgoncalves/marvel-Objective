import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Details from './pages/Details'

function Routes () {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:id" exact component={Details} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routes;