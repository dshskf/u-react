import { userType } from './user-action'

const initial_state = {
    loginUser: null,
    userData: null,
    userPage: null,
    totalItems: null,
    resetUser: null,
    msg: null,
    err: null
}

const userReducer = (state = initial_state, action) => {
    if (action.type === userType.SIGN_IN_SUCCESS) {
        return {
            ...state,
            loginUser: action.data,
            err: null
        }
    }
    else if (action.type === userType.SIGN_OUT) {
        return {
            ...state,
            loginUser: null,
            err: null
        }
    }
    else if (action.type === userType.GET_USER_SUCCESS) {
        return {
            ...state,
            userData: action.data,
            err: null
        }
    }
    else if (action.type === userType.SIGN_UP_START) {
        return {
            ...state,
            err: null,
            msg: null
        }
    }
    else if (action.type === userType.POST_UPDATE_SUCCESS ||
        action.type === userType.SEND_EMAIL_SUCCESS ||
        action.type === userType.SIGN_UP_SUCCESS ||
        action.type === userType.RESET_PASSWORD_SUCCESS) {
        return {
            ...state,
            msg: action.data,
            userData: null,
            err: null
        }
    }
    else if (action.type === userType.AUTHENTICATED_RESET_SUCCESS) {
        return {
            ...state,
            resetUser: action.data,
            msg: null,
            userData: null,
            err: null
        }
    }
    else if (action.type === userType.TOTAL_DOCUMENT_SUCCESS) {
        return {
            ...state,
            totalItems: action.data,
            err: null
        }
    }
    else if (action.type === userType.USER_PAGE) {
        return {
            ...state,
            userPage: action.data,
            err: null
        }
    }
    else if (action.type === userType.CLEAR_ERROR) {
        return {
            ...state,
            msg: null,
            err: null
        }
    }
    else if (action.type === userType.SIGN_FAIL) {
        return {
            ...state,
            err: action.data
        }
    }

    return state
}

export default userReducer