import { createSelector } from 'reselect'

const productState = state => state.product

export const pullProduct = createSelector(
    [productState],
    product => product.productData
)

export const pullDetails = createSelector(
    [productState],
    detail => detail.productDetails
)

export const pullSellerInvoice = createSelector(
    [productState],
    invoice => invoice.sellerInvoice
)