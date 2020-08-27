import React from 'react'
import { Product } from '../../store/state'
import { add , store } from '../../store/index'
import { useSelector } from 'react-redux'

export default function ProductDis(){

    const products = useSelector((state: Product[]) => state)

    // mapping data 
    const product = products.map((product , i) => {
        return(
            <div key={i}>
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <img src={product.src} height='300px' width='300px'/>
                <button  onClick={() => store.dispatch(add(product))}>add to cart</button>
            </div>
        )
    })

    return(
        <div>
            {product}
        </div>
    )
}