import { createSlice, configureStore } from "@reduxjs/toolkit"
import { InitialState } from './state'

const BasketSlice = createSlice({
    name: 'cart',
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    console.log(item.quantity);

                    return item
                }
                console.log(item.quantity);

                return {
                    ...item,
                    added: true,
                    quantity: item.quantity + 1
                }
            })
        },
        remove: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                else {
                    if (item.quantity > 0) {

                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                    }
                    else if (item.quantity <= 0) {
                        return {
                            ...item,
                            added: false
                        }
                    }
                }
                return item
            })
        },
        clear: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: false
                }
            })
        }
    }
})

const store = configureStore({ reducer: BasketSlice.reducer })

export const { add, remove, clear } = BasketSlice.actions

export { BasketSlice, store }