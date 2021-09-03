import React, { Component } from 'react'
import Products from './section/Products'
import Details  from './section/Details'
import Cart from './section/Cart'
import Payment from './section/Payment'
import {Route} from 'react-router-dom'
export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/products" component={Products} exact></Route>
                <Route path="/products/:id" component={Details}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/payment" component={Payment}></Route>
            </section>
        )
    }
}

export default Section
