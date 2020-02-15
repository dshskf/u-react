export const productType = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    DETAIL_START: 'DETAIL_START',
    DETAIL_SUCCESS: 'DETAIL_SUCCESS',
    EDIT_START: 'EDIT_START',
    EDIT_SUCCESS: 'EDIT_SUCCESS',
    FECTH_USER_PRODUCT_START: "FECTH_USER_PRODUCT_START",
    FECTH_USER_PRODUCT_SUCCESS: "FECTH_USER_PRODUCT_SUCCESS",
    DELETE_START: 'DELETE_START',
    DELETE_SUCCESS: 'DELETE_SUCCESS',
    POST_ADD_START: "POST_ADD_START",
    POST_ADD_SUCCESS: "POST_ADD_SUCCESS",
    SELLER_INVOICE_START: "SELLER_INVOICE_START",
    SELLER_INVOICE_SUCCESS: "SELLER_INVOICE_SUCCESS",
    FETCH_FAIL: "FETCH_FAIL"
}

/* ---------------------------------- Fetch --------------------------------- */

export const fetch_start = userInput => ({
    type: productType.FETCH_START,
    data: userInput
})

export const fetch_success = product => ({
    type: productType.FETCH_SUCCESS,
    data: product
})

/* ------------------------------ USER PRODUCT ------------------------------ */

export const user_product_start = userId => ({
    type: productType.FECTH_USER_PRODUCT_START,
    data: userId
})

export const user_product_success = product => ({
    type: productType.FECTH_USER_PRODUCT_SUCCESS,
    data: product
})


/* ------------------------------- Detail Page ------------------------------ */

export const detail_start = prodId => ({
    type: productType.DETAIL_START,
    data: prodId
})

export const detail_success = product => ({
    type: productType.DETAIL_SUCCESS,
    data: product
})

/* ------------------------------ Edit Product ------------------------------ */

export const edit_start = prodId => ({
    type: productType.EDIT_START,
    data: prodId
})

export const edit_success = product => ({
    type: productType.EDIT_SUCCESS,
    data: product
})


/* --------------------------------- Delete --------------------------------- */

export const delete_start = prodId => ({
    type: productType.DELETE_START,
    data: prodId
})

export const delete_success = newProd => ({
    type: productType.DELETE_SUCCESS,
    data: newProd
})

/* -------------------------------- Post add ------------------------------- */

export const post_add_start = userInput => ({
    type: productType.POST_ADD_START,
    data: userInput
})

export const post_add_success = successData => ({
    type: productType.POST_ADD_SUCCESS,
    data: successData
})

export const seller_invoice_start = sellerId => ({
    type: productType.SELLER_INVOICE_START,
    data: sellerId
})

export const seller_invoice_succes = sellerInv => ({
    type: productType.SELLER_INVOICE_SUCCESS,
    data: sellerInv
})


export const fetch_fail = err => ({
    type: productType.FETCH_FAIL,
    data: err
})