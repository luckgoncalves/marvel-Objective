import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Details from './pages/Details'
import { UserProvider } from './contexts/UserContext';


function Routes () {
    
    return (
        <BrowserRouter>
            <UserProvider user={{name: '', decription: ''}}>
                <Header />
            </UserProvider>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:id" exact component={Details} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routes;