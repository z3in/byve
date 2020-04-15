import React from 'react'
import './prod.css'

import image from '../../img/img.png'

const ProductView = ({toggleProdView,viewProd,handleClose,rating}) => {
    
    

    return (
        <div className={`product-view-bg${toggleProdView}`}>
            <div className="product-modal">
                    <div><img src={image}/></div>
                    <div><span>Product name: </span>{viewProd.name}</div>
                    <div><span>Product Details :</span>{viewProd.description}</div>
                    <div><span>Brand : </span>{viewProd.brand}</div>
                    <div><span>Shipping Fee :</span>{viewProd.shipping_fee}</div>
                    <div><span>Rating: </span><div className="product-rating">{rating(parseInt(viewProd.curr_rating))}</div></div>
                    <div><h2><span>Price :</span>{viewProd.price}</h2></div>

                    <div className="product-view-btn-bottom" value={viewProd.id}><button>Add to cart</button><button onClick={handleClose}>close</button></div>
            </div>
        </div>
    )
}


export default ProductView