import { productType } from './product-action'

const initial_state = {
    productData: null,
    productDetails: null,
    sellerInvoice: null,
    err: null
}

const productReducer = (state = initial_state, action) => {
    if (action.type === productType.FETCH_SUCCESS ||
        action.type === productType.DELETE_SUCCESS ||
        action.type === productType.FECTH_USER_PRODUCT_SUCCESS) {
        return {
            ...state,
            productData: action.data,
            err: null
        }
    }
    else if (action.type === productType.SELLER_INVOICE_SUCCESS) {
        return {
            ...state,
            sellerInvoice: action.data,
            err: null
        }
    }
    else if (action.type === productType.DELETE_START) {
        return {
            ...state,
            productData: null,
            err: null
        }
    }
    else if (action.type === productType.DETAIL_SUCCESS ||
        action.type === productType.EDIT_SUCCESS) {
        return {
            ...state,
            productDetails: action.data,
            err: null
        }
    }
    else if (action.type === productType.FETCH_FAIL) {
        return {
            ...state,
            err: action.data
        }
    }
    return state
}

export default productReducer