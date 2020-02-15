import { all, call } from 'redux-saga/effects'
import { userSaga } from './User/user-saga'
import { productSaga } from './Product/product-saga'
import { cartSaga } from './Cart/cart-saga'
import { orderSaga } from './Order/order-saga'


export default function* rootSaga() {
    yield all([
        call(userSaga),
        call(productSaga),
        call(cartSaga),
        call(orderSaga)
    ])
}