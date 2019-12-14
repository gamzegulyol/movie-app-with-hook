const initialState = {
    movies: [],
    loading: false,
    request: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'movie/request':
            return {
                ...state,
                loading: true
            };
        case 'movie/success':
            return {
                ...state,
                movies: action.data,
                loading: false
            };
        default:
            return state;
    }
}