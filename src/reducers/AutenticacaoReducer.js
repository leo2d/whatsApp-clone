const INITIAL_STATE = { name: '', email: '', password: '' };

export default (state = INITIAL_STATE, action) => {

    if (action.type === 'modify_email')
        return { ...state, email: action.payload };
    else if (action.type === 'modify_password')
        return { ...state, password: action.payload };
    else if (action.type === 'modify_name')
        return { ...state, name: action.payload };

    return state;
};