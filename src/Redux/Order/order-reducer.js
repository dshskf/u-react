import { orderType } from './order-action'

const initial_state = {
    detail: null,
    err: null
}

const orderReducer = (state = initial_state, action) => {
    if (action.type === orderType.FETCH_DETAIL_SUCCESS) {
        return {
            ...state,
            detail: action.data,
            err: null
        }
    }
    else if (action.type === orderType.FETCH_FAIL) {
        return {
            ...state,
            err: action.data
        }
    }
    return state
}

export default orderReducer