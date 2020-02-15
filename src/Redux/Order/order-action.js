export const orderType = {
    FETCH_DETAIL_START: "FETCH_DETAIL_START",
    FETCH_DETAIL_SUCCESS: "FETCH_DETAIL_SUCCESS",
    FETCH_FAIL: "FETCH_FAIL"
}

export const fetch_detail_start = userId => ({
    type: orderType.FETCH_DETAIL_START,
    data: userId
})

export const fetch_detail_success = response => ({
    type: orderType.FETCH_DETAIL_SUCCESS,
    data: response
})

export const fetch_fail = err => ({
    type: orderType.FETCH_FAIL,
    data: err
})