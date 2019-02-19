const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    siginUpError: '',
    siginUpSuccess: ''
};

export default (state = INITIAL_STATE, action) => {

    if (action.type) {
        if (action.type === 'modify_email')
            return { ...state, email: action.payload };
        else if (action.type === 'modify_password')
            return { ...state, password: action.payload };
        else if (action.type === 'modify_name')
            return { ...state, name: action.payload };
        else if (action.type == 'create_user_failed')
            return { ...state, siginUpError: action.payload };
        else if (action.type == 'create_user_success')
            return { ...state, siginUpSuccess: action.payload };
    }

    return state;
};