import React from 'react'
import { ProductItem } from '../../store/state'
import { add, store } from '../../store/index'
import { useSelector } from 'react-redux'

import './index.css'

export default function ProductDis() {

    const products = useSelector((state: ProductItem[]) => state)

    // mapping data 
    const product = products.map((product, i) => {
        return (
            <div key={i} className='body-dis-card'>
                <img className='dis-img' src={product.src}alt={i.toString()} />
                <div className='dis-div'>
                    <h4>{product.name}</h4>
                    <h5>${product.price}</h5>
                    <button className='hvr-bounce-to-right' disabled={product.added} onClick={() => store.dispatch(add(product))}>add to cart</button>
                </div>
            </div>
        )
    })

    return (
        <div className='dis-pro container'>
            {product}
        </div>
    )
}