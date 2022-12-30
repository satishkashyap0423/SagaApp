let initialState=""
const loginReducer = (state = initialState, action) => {
    console.log("dss",action)
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.response,
                loading: false,
            };

        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state
    }
}

export default loginReducer;