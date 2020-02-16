import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects'
import {
    cartType,
    fetch_cart_success,
    fetch_fail,
    add_cart_success,
    post_cart_success,
    get_courier_success,
    post_pay_success
} from './cart-action'

function onFetchCart(userId) {
    return fetch('http://localhost:9000/carts', {
        headers: {
            Authorization: userId,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
}

function postAddCart(data) {
    return fetch('http://localhost:9000/products/add', {
        method: "POST",
        headers: {
            //Authorization: userId,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
}

function postCartData(data) {
    return fetch('http://localhost:9000/products/update', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
}

function postCourierData(data) {
    return fetch('http://localhost:9000/carts/courier-cost', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
}

function postCartToPay(data) {
    return fetch('http://localhost:9000/payment/add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
}


/* ------------------------------- Fetch Cart ------------------------------- */

export function* fetchCart({ data }) {
    try {
        const response = yield onFetchCart(data.userId)
        if (response.err) {
            yield put(fetch_fail(response.err))
        } else {
            yield put(fetch_cart_success(response))
        }
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* fetchCartStart() {
    yield takeLatest(cartType.FETCH_CART_START, fetchCart)
}

/* -------------------------------- Add Cart -------------------------------- */

export function* onAddCart({ data: { collection } }) {
    try {
        const response = yield postAddCart(collection)
        if (response.err) {
            yield put(fetch_fail(response))
        } else {
            yield put(add_cart_success(response))
        }
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onAddCartStart() {
    yield takeLatest(cartType.ADD_CART_START, onAddCart)
}

/* ------------------------------- Update Cart ------------------------------ */

export function* onPostCart({ data }) {
    try {
        const response = yield postCartData(data)
        yield put(post_cart_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onPostCartStart() {
    yield takeLatest(cartType.POST_CART_START, onPostCart)
}

/* ------------------------------ Shipment Fee ------------------------------ */

export function* onGetCourier({ data }) {
    try {
        const response = yield postCourierData(data)
        yield put(get_courier_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onGetCourierStart() {
    yield takeEvery(cartType.GET_COURIER_START, onGetCourier)
}


/* ---------------------------- Post cart to pay ---------------------------- */
export function* onPostPay({ data }) {
    try {
        console.log(data)
        const response = yield postCartToPay(data)
        yield put(post_pay_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}


export function* onPostPayStart() {
    yield takeLatest(cartType.POST_PAY_START, onPostPay)
}

export function* cartSaga() {
    yield all([
        call(fetchCartStart),
        call(onAddCartStart),
        call(onPostCartStart),
        call(onGetCourierStart),
        call(onPostPayStart)
    ])
}