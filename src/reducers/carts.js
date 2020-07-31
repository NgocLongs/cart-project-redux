import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const carts = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndexToCart(state, product);
            if(index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART :
            index = findIndexToCart(state, product);
            if(index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART :
            index = findIndexToCart(state, product);
            if(index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

var findIndexToCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default carts;