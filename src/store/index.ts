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
                }
            })
        },
        remove: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: false
                }
            })
        },
        inc:(state , action) =>{
            return state.map(item => {
                return{
                    ...item,
                    quantity: item.quantity++
                }
            })
        }
    }
})

const store = configureStore({ reducer: BasketSlice.reducer })

export const { add , remove , inc } = BasketSlice.actions

export { BasketSlice, store }