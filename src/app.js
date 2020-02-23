import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import classes from './global.scss';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/footer';
import Book from './components/Book';
import editBook from './components/editBook';
//Crate a class based component. import components Header, Router, footer etc.
class App extends React.Component  {
    constructor(props){
        super(props);
    }
    render(){
        
    return(
        <div className={classes.wrapper}>
             <Header/>
            <BrowserRouter>
           <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/book' component={Book} />
                <Route  path='/editbook/:id' component={editBook} />
           </Switch>
            </BrowserRouter>

            <Footer/>
        </div>
    )
    }
}

export default App