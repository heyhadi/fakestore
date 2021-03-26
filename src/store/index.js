import {combineReducers, createStore} from 'redux'
import productReducer from './reducers/product'
import favoriteReducer from './reducers/favorite'


const rootReducer = combineReducers({
    product: productReducer,
    favorites: favoriteReducer
})

const store = createStore(rootReducer)

export default store 