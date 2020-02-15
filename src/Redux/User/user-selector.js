import { createSelector } from 'reselect'


const userState = state => state.user

export const pullUser = createSelector(
    [userState],
    user => user.loginUser
)

export const pullEditData = createSelector(
    [userState],
    user => user.userData
)

export const pullPage = createSelector(
    [userState],
    user => user.userPage
)

export const pullTotal = createSelector(
    [userState],
    user => user.totalItems
)

export const pullMsg = createSelector(
    [userState],
    user => user.msg
)

export const pullResetUser = createSelector(
    [userState],
    user => user.resetUser
)

export const pullError = createSelector(
    [userState],
    errData => errData.err
)

