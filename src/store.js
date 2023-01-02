import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './Reducers/RestaurantReducer'
//to generate middleware

const reducers=combineReducers({
    restaurantReducer:restaurantListReducer
    //key:function


})

const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))

export default store