import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import message from './message';

const appReducers = combineReducers({
    products,
    carts,
    message
})

export default appReducers;