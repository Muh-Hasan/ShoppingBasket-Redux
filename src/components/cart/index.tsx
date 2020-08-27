import React from 'react'
import { useSelector } from 'react-redux'
import { store, remove, add, clear } from '../../store/index'
import { ProductItem } from '../../store/state'


export default function Cart() {

    const products = useSelector((state: ProductItem[]) => state)


    return (
        <div>
            <h3>{products.filter(product => product.added).length}</h3>
            {products.filter(product => product.added).map((product: ProductItem, i) => product.quantity === 1 ? (
                <div key={i.toString()}>
                    <span>{product.name}</span>
                    <h1>{product.quantity}</h1>
                    <button onClick={() => store.dispatch(add(product))}>+</button>
                    <button onClick={() => store.dispatch(remove(product))}>-</button>
                    <button onClick={() => store.dispatch(clear(product))}>Clear</button>
                </div>
            ) : ' ')}
        </div>
    )
}