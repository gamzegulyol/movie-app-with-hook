const initialState = {
    movies:[],
    loading: false,

}
export default(state=initialState, action) => {
    switch(action.type){
        case 'movie/request':
            return{
                ...state,
                loading:true
            }
        case 'movie/success':
                return{
                    ...state,
                    movie:action.data,
                    loading:true
                    }
        default:
            return state;

    }

};