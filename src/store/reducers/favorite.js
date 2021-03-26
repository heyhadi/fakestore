const initialState={
    loading: false,
    favorites:[],
    error: null
}

const favoriteReducer = (state =initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state, favorites: state.favorites.concat({
                    payload: action.payload
                })
            }
        default:
            return state
    }

}


export default favoriteReducer