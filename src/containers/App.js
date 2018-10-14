import React, { Component } from 'react';
import classes from './App.css';
import Header from '../components/Header/Header';

import Footer from '../components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import HomeBlog from '../components/Blog/Home/HomeBlog';
import ProductBlog from '../components/Blog/Products/ProductBlog';
import AboutBlog from '../components/Blog/About/AboutBlog';
import ContactBlog from '../components/Blog/Contact/ContactBlog';

class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
            <div className = {classes.App}>
                <Header />
                <Navbar />
                <Route path="/" exact component={HomeBlog} />
                <Route path="/Products" exact component={ProductBlog} />
                <Route path="/About" exact component={AboutBlog} />
                <Route path="/Contact" exact component={ContactBlog} />
                <Footer />

            </div>
            </BrowserRouter>
        );
    }
}
export default App;