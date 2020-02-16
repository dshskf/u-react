import { takeLatest, put, call, all } from 'redux-saga/effects';

import {
    userType,
    signin_success,
    signup_success,
    get_user_success,
    post_update_success,
    total_document_success,
    send_email_success,
    reset_password_success,
    authenticated_reset_success,
    sign_fail
} from './user-action';

function postData(email, password) {
    return fetch('http://localhost:9000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            loginEmail: email,
            loginPassword: password
        })
    })
        .then((res) => res.json())
        .then((user) => user);
}

function postSignUpData(data) {
    return fetch('http://localhost:9000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((user) => user);
}

function getUserData(userId) {
    return fetch('http://localhost:9000/user/edit', {
        headers: {
            Authorization: userId,
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((user) => user);
}

function postUserUpdate(data) {
    return fetch('http://localhost:9000/user/edit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((user) => user);
}

function getTotalDocument(data) {
    return fetch('http://localhost:9000/total-document', {
        headers: {
            Authorization: JSON.stringify({
                search: data.userInput,
                page: data.page
            }),
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then((res) => res.json())
        .then((product) => product);
}

function sendEmail(email) {
    return fetch('http://localhost:9000/user/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userEmail: email
        })
    })
        .then((res) => res.json())
        .then((user) => user);
}

function resetPassword(data) {
    return fetch('http://localhost:9000/user/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((user) => user);
}

function authResetUser(token) {
    return fetch('http://localhost:9000/user/reset', {
        headers: {
            Authorization: JSON.stringify(token),
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then((res) => res.json())
        .then((product) => product);
}
/* -------------------------------------------------------------------------- */
/*                                    Login                                   */
/* -------------------------------------------------------------------------- */

export function* onLogin({ data: { email, password } }) {
    try {
        const postAPI = yield postData(email, password);
        if (postAPI.err) {
            yield put(sign_fail(postAPI.err));
        } else {
            yield put(signin_success(postAPI));
        }
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onLoginStart() {
    yield takeLatest(userType.SIGN_IN_START, onLogin);
}

/* -------------------------------------------------------------------------- */
/*                                  Register                                  */
/* -------------------------------------------------------------------------- */

export function* onSignUp({ data }) {
    try {
        const postAPI = yield postSignUpData(data);
        console.log(postAPI)
        if (postAPI.err) {
            yield put(sign_fail(postAPI.err));
        } else {
            yield put(signup_success(postAPI));
        }
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onSignUpStart() {
    yield takeLatest(userType.SIGN_UP_START, onSignUp)
}

/* -------------------------------------------------------------------------- */
/*                                Get user data                               */
/* -------------------------------------------------------------------------- */

export function* onGetUser({ data }) {
    try {
        const postAPI = yield getUserData(data);
        yield put(get_user_success(postAPI));
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onGetUserStart() {
    yield takeLatest(userType.GET_USER_START, onGetUser);
}


/* -------------------------------------------------------------------------- */
/*                                 Update User                                */
/* -------------------------------------------------------------------------- */

export function* onPostUpdate({ data }) {
    try {
        const postAPI = yield postUserUpdate(data);
        if (postAPI.status === 200 || postAPI.status === 201) {
            yield put(post_update_success(postAPI));
        } else {
            yield put(sign_fail(postAPI));
        }
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onPostUpdateStart() {
    yield takeLatest(userType.POST_UPDATE_START, onPostUpdate);
}

/* -------------------------------------------------------------------------- */
/*                                Total Document                               */
/* -------------------------------------------------------------------------- */

export function* onTotalDocument({ data }) {
    try {
        data = data ? data : '';
        const postAPI = yield getTotalDocument(data);
        yield put(total_document_success(postAPI));
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onTotalDocumentStart() {
    yield takeLatest(userType.TOTAL_DOCUMENT_START, onTotalDocument);
}


/* -------------------------------------------------------------------------- */
/*                                 Send Email                                 */
/* -------------------------------------------------------------------------- */

export function* onSendEmail({ data }) {
    try {
        const postAPI = yield sendEmail(data);
        if (postAPI.err) {
            yield put(sign_fail(postAPI.err));
        } else {
            yield put(send_email_success(postAPI));
        }
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onSendEmailStart() {
    yield takeLatest(userType.SEND_EMAIL_START, onSendEmail)
}


/* -------------------------------------------------------------------------- */
/*                               Auth Reset User                              */
/* -------------------------------------------------------------------------- */

export function* onAuthResetUser({ data }) {
    try {
        const postAPI = yield authResetUser(data);
        if (postAPI.err) {
            yield put(sign_fail(postAPI.err));
        } else {
            yield put(authenticated_reset_success(postAPI));
        }
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onAuthResetUserStart() {
    yield takeLatest(userType.AUTHENTICATED_RESET_START, onAuthResetUser)
}


/* -------------------------------------------------------------------------- */
/*                                 Reset Page                                 */
/* -------------------------------------------------------------------------- */

export function* onResetPassword({ data }) {
    try {
        const postAPI = yield resetPassword(data);
        if (postAPI.err) {
            yield put(sign_fail(postAPI.err));
        } else {
            yield put(reset_password_success(postAPI));
        }
    } catch (err) {
        yield put(sign_fail(err));
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(userType.RESET_PASSWORD_START, onResetPassword)
}

export function* userSaga() {
    yield all([
        call(onLoginStart),
        call(onSignUpStart),
        call(onGetUserStart),
        call(onPostUpdateStart),
        call(onTotalDocumentStart),
        call(onSendEmailStart),
        call(onResetPasswordStart),
        call(onAuthResetUserStart)
    ]);
}
