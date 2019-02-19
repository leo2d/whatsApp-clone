import firebase from '@firebase/app'
require('firebase/auth')

const modifyEmail = (text) => {
    return {
        type: 'modify_email',
        payload: text
    }
}
const modifyPassword = (text) => {
    return {
        type: 'modify_password',
        payload: text
    }
}
const modifyName = (text) => {
    return {
        type: 'modify_name',
        payload: text
    }
}
const createUser = ({ name, email, password }) => {

    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(user, dispatch))
            .catch(error => createUserFailed(error, dispatch));
    }
}

const createUserSuccess = (user, dispatch) => {
    dispatch({
        type: 'create_user_success',
        payload: user
    });
}
const createUserFailed = (error, dispatch) => {
    dispatch({
        type: 'create_user_failed',
        payload: error.message
    });
}

export { modifyEmail, modifyPassword, modifyName, createUser };