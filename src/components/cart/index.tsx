import React from 'react'
import { useSelector } from 'react-redux'
import { store, remove, clear, inc } from '../../store/index'
import { ProductItem } from '../../store/state'
import './index.css'
import { Link } from 'react-router-dom'
export default function Cart() {


    const products = useSelector((state: ProductItem[]) => state)

    return (
        <>
            <div className='div-cen-empty'>
                {products.filter(product => product.added).length === 0 ? (
                <>
                    <h1>Your Cart is Empty</h1>
                    <Link to='/'><button className='hvr-bounce-to-left'>shop here</button>
                    </Link>
                </>) : ''}
            </div>
            {products.filter(product => product.added).length === 0 ? ' ' :
                <div>
                    <table >
                        <thead >
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>T.Price</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {products.filter(product => product.added).map((product: ProductItem, i) => (
                                <tr key={i.toString()}>
                                    <td>
                                        <img className='img-table' src={product.src} alt={product.name} height='100px' width='100px' />
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>

                                    <td>{product.quantity}</td>

                                    <td>${product.price}</td>

                                    <td>{product.price * product.quantity}</td>
                                    <td>
                                        <button className='cart-button' onClick={() => store.dispatch(inc(product))}>+</button>
                                        <button className='cart-button' onClick={() => store.dispatch(remove(product))}>-</button>
                                        <button className='cart-button' onClick={() => store.dispatch(clear(product))}>x</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h5 className='total-align'>Total : ${products.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)}</h5>
                </div>}
        </>
    )
}