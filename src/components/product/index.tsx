import React from 'react'
import { ProductItem } from '../../store/state'
import { add , store } from '../../store/index'
import { useSelector } from 'react-redux'

export default function ProductDis(){

    const products = useSelector((state: ProductItem[]) => state)

    // mapping data 
    const product = products.map((product , i) => {
        return(
            <div key={i}>
                <img src={product.src} height='300px' width='300px' alt={i.toString()}/>
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
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