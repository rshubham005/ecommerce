import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../CSS/Products.css'
export class Products extends Component {
    static contextType= DataContext;
    render() {
        const {products}= this.context;
        return (
            <div id="product">
                {
                products.map(product=>
                (
                    <div className="card" key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <img src={product.src} alt={product._id}/>
                    </Link>
                    <div className="content">
                    <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                    <span>${product.price}</span>
                    <p>{product.description}</p>
                    <button onClick={()=>this.context.addCart(product._id)}>Add To Cart</button>
                    </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Products
