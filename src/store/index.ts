import { createSlice, configureStore } from "@reduxjs/toolkit"
import { InitialState } from './state'

const BasketSlice = createSlice({
    name: 'cart',
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
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
                else if (item.quantity <= 1) {
                    return {
                        ...item,
                        quantity: 0,
                        added: false,
                    }
                }
                return {
                    ...item,
                    quantity: item.quantity - 1
                }

            })
        },

        clear: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: 0,
                    added: false,
                }
            })
        },
        inc: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            })
        }
    }
})

const store = configureStore({ reducer: BasketSlice.reducer })

export const { add, remove, clear, inc } = BasketSlice.actions

export { BasketSlice, store }