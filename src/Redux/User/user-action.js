export const userType = {
    SIGN_IN_START: "SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_UP_START: "SIGN_UP_START",
    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    SIGN_OUT: "SIGN_OUT",
    SIGN_FAIL: "SIGN_FAIL",
    GET_USER_START: "GET_USER_START",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    POST_UPDATE_START: "POST_UPDATE_START",
    POST_UPDATE_SUCCESS: "POST_UPDATE_SUCCESS",
    TOTAL_DOCUMENT_START: "TOTAL_DOCUMENT_START",
    TOTAL_DOCUMENT_SUCCESS: "TOTAL_DOCUMENT_SUCCESS",
    SEND_EMAIL_START: "SEND_EMAIL_START",
    SEND_EMAIL_SUCCESS: "SEND_EMAIL_SUCCESS",
    RESET_PASSWORD_START: "RESET_PASSWORD_START",
    RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
    AUTHENTICATED_RESET_START: "AUTHENTICATED_RESET_START",
    AUTHENTICATED_RESET_SUCCESS: "AUTHENTICATED_RESET_SUCCESS",
    USER_PAGE: "USER_PAGE",
    CLEAR_ERROR: 'CLEAR_ERROR'
}


export const signin_start = user => ({
    type: userType.SIGN_IN_START,
    data: user
})

export const signin_success = user => ({
    type: userType.SIGN_IN_SUCCESS,
    data: user
})

export const signup_start = user => ({
    type: userType.SIGN_UP_START,
    data: user
})

export const signup_success = response => {
    return {
        type: userType.SIGN_UP_SUCCESS,
        data: response
    }
}

export const signout = () => ({
    type: userType.SIGN_OUT
})

export const get_user_start = userId => ({
    type: userType.GET_USER_START,
    data: userId
})

export const get_user_success = userData => ({
    type: userType.GET_USER_SUCCESS,
    data: userData
})

export const post_update_start = inputData => ({
    type: userType.POST_UPDATE_START,
    data: inputData
})

export const post_update_success = () => ({
    type: userType.POST_UPDATE_SUCCESS
})

export const user_page = page => ({
    type: userType.USER_PAGE,
    data: page
})

export const total_document_start = userInput => ({
    type: userType.TOTAL_DOCUMENT_START,
    data: userInput
})

export const total_document_success = total => ({
    type: userType.TOTAL_DOCUMENT_SUCCESS,
    data: total
})

export const send_email_start = email => ({
    type: userType.SEND_EMAIL_START,
    data: email
})

export const send_email_success = response => ({
    type: userType.SEND_EMAIL_SUCCESS,
    data: response
})

export const reset_password_start = pass => ({
    type: userType.RESET_PASSWORD_START,
    data: pass
})

export const reset_password_success = response => ({
    type: userType.RESET_PASSWORD_SUCCESS,
    data: response
})

export const authenticated_reset_start = token => ({
    type: userType.AUTHENTICATED_RESET_START,
    data: token
})

export const authenticated_reset_success = response => ({
    type: userType.AUTHENTICATED_RESET_SUCCESS,
    data: response
})

export const clear_error = () => ({
    type: userType.CLEAR_ERROR
})

export const sign_fail = err => ({
    type: userType.SIGN_FAIL,
    data: err
})
