import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Details from './pages/Details'

import { UserProvider } from './contexts/UserContext';
import { PaginateProvider } from './contexts/PaginateContext';


function Routes () {
    
    return (
        <BrowserRouter>
            <UserProvider user={{name: '', decription: ''}}>
                <Header />
            </UserProvider>

            <PaginateProvider total={0} limit={0} currentPage={0}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/details/:id" exact component={Details} />
                </Switch>
            </PaginateProvider>
        </BrowserRouter>

    )
}

export default Routes;