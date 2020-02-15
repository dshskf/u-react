export const cartType = {
    FETCH_CART_START: "FETCH_CART_START",
    FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
    ADD_CART_START: "ADD_CART_START",
    ADD_CART_SUCCESS: "ADD_CART_SUCCESS",
    UPDATE_CART: "UPDATE_CART",
    SUBMIT_CART: "SUBMIT_CART",
    POST_CART_START: "POST_CART_START",
    POST_CART_SUCCESS: "POST_CART_SUCCESS",
    GET_COURIER_START: "GET_COURIER_START",
    GET_COURIER_SUCCESS: "GET_COURIER_SUCCESS",
    CLEAR_COURIER_PRICE: "CLEAR_COURIER_PRICE",
    POST_PAY_START: "POST_PAY_START",
    POST_PAY_SUCCESS: "POST_PAY_SUCCESS",
    FETCH_FAIL: "FETCH_FAIL"
}

export const fetch_cart_start = userId => ({
    type: cartType.FETCH_CART_START,
    data: userId
})

export const fetch_cart_success = response => ({
    type: cartType.FETCH_CART_SUCCESS,
    data: response
})

export const add_cart_start = id => ({
    type: cartType.ADD_CART_START,
    data: id
})

export const add_cart_success = response => ({
    type: cartType.ADD_CART_SUCCESS,
    data: response
})

export const onUpdateCart = product => ({
    type: cartType.UPDATE_CART,
    data: product
})

export const onSubmitCart = cart => ({
    type: cartType.SUBMIT_CART,
    data: cart
})

export const post_cart_start = cartData => ({
    type: cartType.POST_CART_START,
    data: cartData
})

export const post_cart_success = cartData => ({
    type: cartType.POST_CART_SUCCESS,
    data: cartData
})

export const get_courier_start = locData => ({
    type: cartType.GET_COURIER_START,
    data: locData
})

export const get_courier_success = locData => ({
    type: cartType.GET_COURIER_SUCCESS,
    data: locData
})

export const post_pay_start = cartData => ({
    type: cartType.POST_PAY_START,
    data: cartData
})

export const post_pay_success = response => ({
    type: cartType.POST_PAY_SUCCESS,
    data: response
})

export const clear_price = () => ({
    type: cartType.CLEAR_COURIER_PRICE
})

export const fetch_fail = err => ({
    type: cartType.FETCH_FAIL,
    data: err
})