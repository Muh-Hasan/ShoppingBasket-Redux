import { createSlice, configureStore } from "@reduxjs/toolkit"
import { InitialState } from './state'

const BasketSlice = createSlice({
    name: 'cart',
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
            return {
                ...state,
                cart: [action.payload.product, ...state]
            };
        },
        // remove: (state, action) => {
        //     return {
        //         ...state,
        //         cart: state.cart.filter((item: { id: String }) => item.id !== action.payload)
        //     };
        // }


    }
})

const store = configureStore({ reducer: BasketSlice.reducer })

export const { add } = BasketSlice.actions

export { BasketSlice, store }