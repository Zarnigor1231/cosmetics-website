import {
    createSlice
} from "@reduxjs/toolkit";
import {
    loadState
} from "../hooks";


const initialState = loadState("product") || {
    // stateBtn:false,
    products: [],
    count: 0,
    totalPrice: 0
}



const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {

            return {
                ...state,
                // stateBtn:true,
                products: [...state.products, {
                    ...action.payload,
                    count: 1,
                    userPrice: (action.payload.price)
                }]
            }
        },
        removeProduct: (state, action) => {
            return {
                ...state,
                // stateBtn:false,
                products: state.products.filter((item) => item.id !== action.payload)
            }
        },
        toggleAmount: (state, action) => {

            if (action.payload.type === "add") {
                const newProducts = state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            count: item.count + 1,
                            userPrice: ((item.count + 1) * item.price).toFixed(1)
                        }
                    }

                    return item;
                })

                return {
                    ...state,
                    products: newProducts
                }
            }
            if (action.payload.type === "remove") {
                const newProducts = state.products.map((item) => {
                    if (item.id === action.payload.id && item.count > 0) {
                        return {
                            ...item,
                            count: item.count - 1,
                            userPrice:( (item.count - 1) * item.price).toFixed(1)
                        }
                    }

                    return item;
                })

                return {
                    ...state,
                    products: newProducts
                }
            }
        },
        totalPrice: (state) => {
            let countProduct = 0
            state.products.forEach(element => {
                countProduct += 1
            });

            return {
                ...state,
                count: countProduct
            }
        },
        // cartBtn:(state,action) => {
        //     return {
        //         ...state,
        //         stateBtn:action.payload
        //     }
        // }
    },
})

export const {
    addProduct,
    removeProduct,
    totalPrice,
    toggleAmount,
} = ProductSlice.actions;

export default ProductSlice.reducer;