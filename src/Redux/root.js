import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/user-reducer'
import productReducer from './Product/product-reducer'
import cartReducer from './Cart/cart-reducer'
import orderReducer from './Order/order-reducer'

const persistConfig = {
    key: 'T3sTF0rp3Rs1St',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
})

export default persistReducer(persistConfig, rootReducer)