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

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .then(error => console.log(error));

    return {
        type: 'create_user',
        payload: ''
    };
}

export { modifyEmail, modifyPassword, modifyName, createUser };