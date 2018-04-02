import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Index from '../view/index';
import Book from '../view/book';
import About from '../view/about';
import User from '../view/user';
import Details from '../view/details';



class RouterIndex extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" render={ ()=> <Redirect to="/index/all" /> } />
                <Route path="/index/:id" component={Index} />
                {/* <Route path="/book" Component={Book} /> //这里的 Component 必须小写 */}
                <Route path="/book" component={Book} />
                <Route path="/about" component={About} />
                <Route path="/user/:id" component={User} />
                <Route path="/details/:id" component={Details} />
            </Switch>
        )
    }
}

export default RouterIndex;