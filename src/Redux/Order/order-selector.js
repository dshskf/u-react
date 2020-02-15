import { createSelector } from 'reselect'

const orderState = state => state.order

export const pullDetail = createSelector(
    [orderState],
    order => order.detail
)