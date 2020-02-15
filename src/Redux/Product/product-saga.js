import { takeLatest, put, call, all } from 'redux-saga/effects'

import {
    productType,
    fetch_success,
    fetch_fail,
    detail_success,
    edit_success,
    delete_success,
    user_product_success,
    seller_invoice_succes
} from './product-action'

function fetching(data) {
    return fetch('http://localhost:9000/', {
        headers: {
            Authorization: JSON.stringify({
                search: data.userInput,
                page: data.page
            }),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(product => product)
}

function getSingleProduct(prodId) {
    return fetch('http://localhost:9000/products/details/' + prodId)
        .then(res => res.json())
        .then(data => data)
}

function deleteProduct(prodId) {
    return fetch('http://localhost:9000/seller/delete-product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            prodId: prodId
        })
    })
        .then(res => res.json())
        .then(product => {
            console.log(product)
            return product
        })
}

function fetchUserProduct(userId) {
    return fetch('http://localhost:9000/user/products', {
        headers: {
            Authorization: userId,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
}

function fetchSellerInvoice(sellerId){
    return fetch('http://localhost:9000/seller/invoice', {
        headers: {
            Authorization: sellerId,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
}

/* -------------------------------------------------------------------------- */
/*                                  Home Data                                 */
/* -------------------------------------------------------------------------- */

export function* onFetch({ data }) {
    try {        
        data = data ? data : ""
        const response = yield fetching(data)
        yield put(fetch_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onFetchStart() {
    yield takeLatest(productType.FETCH_START, onFetch)
}



/* -------------------------------------------------------------------------- */
/*                                Details page                                */
/* -------------------------------------------------------------------------- */

export function* onDetail({ data: { prodId } }) {
    try {
        const response = yield getSingleProduct(prodId)
        yield put(detail_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onDetailStart() {
    yield takeLatest(productType.DETAIL_START, onDetail)
}

/* -------------------------------------------------------------------------- */
/*                                  Edit Page                                 */
/* -------------------------------------------------------------------------- */
export function* onEdit({ data: { uid } }) {
    try {
        //Add Token later        
        const response = yield getSingleProduct(uid)
        yield put(edit_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onEditStart() {
    yield takeLatest(productType.EDIT_START, onEdit)
}


/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

export function* onDelete({ data }) {
    try {
        const response = yield deleteProduct(data.prodId)
        yield put(delete_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onDeleteStart() {
    yield takeLatest(productType.DELETE_START, onDelete)
}


/* -------------------------------------------------------------------------- */
/*                                USER PRODUCT                                */
/* -------------------------------------------------------------------------- */

export function* onUserProduct({ data }) {
    try {
        const response = yield fetchUserProduct(data.userId)
        yield put(user_product_success(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}


export function* onUserProductStart() {
    yield takeLatest(productType.FECTH_USER_PRODUCT_START, onUserProduct)
}

/* -------------------------------------------------------------------------- */
/*                               Seller Invoice                               */
/* -------------------------------------------------------------------------- */

export function* onSellerInvoice({ data }) {
    try {
        const response = yield fetchSellerInvoice(data)
        yield put(seller_invoice_succes(response))
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onSellerInvoiceStart() {
    yield takeLatest(productType.SELLER_INVOICE_START, onSellerInvoice)
}

export function* productSaga() {
    yield all([
        call(onFetchStart),
        call(onDetailStart),
        call(onEditStart),
        call(onDeleteStart),
        call(onUserProductStart),
        call(onSellerInvoiceStart)
    ])
}