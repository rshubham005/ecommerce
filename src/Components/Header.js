import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu from './SVG/bars-solid.svg'
import Close from './SVG/times-solid.svg'
import Shoppingcart from './SVG/shopping-cart-solid.svg'
import './CSS/Header.css'
import { DataContext } from './Context'
export class Header extends Component {
 static contextType= DataContext
    state = {
        toggle:false
    }
    menuToggle=()=>
    {
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle}=this.state
        const {cart}= this.context
        return (
            <header>
            <div className="menu">
                <img src={Menu} alt="bars" width="20" onClick={this.menuToggle}/>
            </div>
            <div className="logo">
                <h1><Link to="/">NIKE</Link></h1>
            </div>
            <nav>
                <ul className={toggle? "toggle": ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login1">Login/Register</Link></li>
                    <li className="close">
                        <img src={Close} alt="cross" width="20" onClick={this.menuToggle}/>
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Shoppingcart} alt="cart" width="20"/>
                    </Link>
                </div>
            </nav>
            </header>
        )
    }
}

export default Header
