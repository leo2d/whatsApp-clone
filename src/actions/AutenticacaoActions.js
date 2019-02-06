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


export { modifyEmail, modifyPassword, modifyName };