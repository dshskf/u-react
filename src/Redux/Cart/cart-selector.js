import { createSelector } from 'reselect'

const cartState = state => state.cart

export const pullData = createSelector(
    [cartState],
    data => data.user_cart
)

export const pullPostData = createSelector(
    [cartState],
    data => data.cartToPost
)

export const pullCourierCost = createSelector(
    [cartState],
    data => data.totalCourier
)

export const pullError = createSelector(
    [cartState],
    data => data.err
)