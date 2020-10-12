import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { ProductItem } from './components/ProductItem';
import { ProductList } from './components/ProductList';


export const RouteConfig = () => {
    return (
        <Router>
        <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About} />
                <Route exact path='/productList' component={ProductList} />
                <Route path='/productList/:id' component={ProductItem} />
                <Route path='*' component={()=> <h1>404 Page Not Found</h1>} />
            </Switch>
        </Router>
    )
}
