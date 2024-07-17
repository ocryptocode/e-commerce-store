// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>E-Commerce Store</h1>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route path="/product/:id" component={ProductDetail} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;

