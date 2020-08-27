import React from 'react'
import { useSelector } from 'react-redux'
import { store, remove, inc } from '../../store/index'
import { ProductItem } from '../../store/state'


export default function Cart() {

    const products = useSelector((state: ProductItem[]) => state)

    return (
        <div>
            {products.filter(product => product.added).map((product: ProductItem, i) => (
                <div key={i.toString()}>
                    <span>{product.name}</span>
                    <span>{product.quantity}</span>
                    <button onClick={() => store.dispatch(inc(product.quantity))}>+</button>
                    <button>-</button>
                    <button onClick={() => store.dispatch(remove(product))}>Del</button>
                </div>
            ))}
        </div>
    )
}