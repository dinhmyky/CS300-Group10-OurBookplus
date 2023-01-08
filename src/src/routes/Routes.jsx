import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import SearchBook from '../pages/SearchBook'
import ViewCart from '../pages/ViewCart'
import ShareBook from '../pages/ShareBook'
import QandA from '../pages/QandA'
import Login from '../pages/Login'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/searchbook/:slug' component={Product}/>
            <Route path='/searchbook' component={SearchBook}/>
            <Route path='/sharebook' component={ShareBook}/>
            <Route path='/q&a' component={QandA}/>
            <Route path='/viewcart' component={ViewCart}/>
            <Route path='/login' component={Login}/>
        </Switch>
    )
}

export default Routes
