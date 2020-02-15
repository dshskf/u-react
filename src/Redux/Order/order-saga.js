import { takeLatest, put, call, all } from 'redux-saga/effects'
import { orderType, fetch_detail_success, fetch_fail } from './order-action'


function fetchDetail(userId) {
    return fetch("http://localhost:9000/payment/data", {
        headers: {
            Authorization: userId,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(user => user)
}

export function* onFetchDetail({data}) {
    try {
        const postAPI = yield fetchDetail(data)
        if (postAPI.status === 200 || postAPI.status === 201) {
            yield put(fetch_detail_success(postAPI))
        } else {
            yield put(fetch_fail(postAPI))
        }
    } catch (err) {
        yield put(fetch_fail(err))
    }
}

export function* onFetchDetailStart() {
    yield takeLatest(orderType.FETCH_DETAIL_START, onFetchDetail)
}

export function* orderSaga() {
    yield all([
        call(onFetchDetailStart)
    ])
}