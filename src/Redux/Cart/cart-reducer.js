import { cartType } from './cart-action'

const initial_state = {
    user_cart: null,
    cartToPost: null,
    totalCourier: null,
    err: null
}

const cartReducer = (state = initial_state, action) => {
    if (action.type === cartType.FETCH_CART_SUCCESS ||
        action.type === cartType.UPDATE_CART) {
        return {
            ...state,
            user_cart: action.data,
            err: null
        }
    }
    else if (action.type === cartType.SUBMIT_CART) {
        return {
            ...state,
            cartToPost: action.data,
            err: null
        }
    }
    else if (action.type === cartType.ADD_CART_SUCCESS ||
        action.type === cartType.POST_CART_SUCCESS ||
        action.type === cartType.POST_PAY_SUCCESS) {
        return {
            ...state,
            err: null
        }
    }
    else if (action.type === cartType.GET_COURIER_SUCCESS) {
        return {
            ...state,
            totalCourier: action.data,
            err: null
        }
    }
    else if (action.type === cartType.CLEAR_COURIER_PRICE) {
        return {
            ...state,
            totalCourier: null,
            err: null
        }
    }
    else if (action.type === cartType.FETCH_FAIL) {
        return {
            ...state,
            err: action.data
        }
    }
    return state
}

export default cartReducer