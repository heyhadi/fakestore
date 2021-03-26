const initialState = {
    products: [],
    product: {},
    error: null,
    loading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT': 
        return {
            ...state, products:action.payload
            
        }
        default:
            return state
    }
}

export default productReducer