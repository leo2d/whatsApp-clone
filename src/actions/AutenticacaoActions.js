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


export { modifyEmail, modifyPassword };