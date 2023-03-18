import {
    configureStore,
    createListenerMiddleware,
    isAnyOf
} from '@reduxjs/toolkit';
import productSlice, {
    addProduct,
    removeProduct,
    totalPrice
} from './productSlice';

const productMiddleware = createListenerMiddleware()

productMiddleware.startListening({
    matcher: isAnyOf(addProduct, removeProduct),
    effect: (_, api) => {
        api.dispatch(totalPrice())
    }
})


export const store = configureStore({
    reducer: {
        productSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productMiddleware.middleware)
})