import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as message from './../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as actions from './../actions/index';

class CartContainer extends Component {

    showCart = (carts) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = <tr>
            <td>{ message.MSG_CART_EMPTY }</td>
        </tr>;
        if(carts.length > 0) {
            result = carts.map((cart, index) => {
                return (
                    <CartItem 
                        key = { index }
                        cart = { cart }
                        onDeleteProductInCart = { onDeleteProductInCart }
                        onChangeMessage = { onChangeMessage }
                        onUpdateProductInCart = { onUpdateProductInCart }
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (carts) => {
        var result = null;
        if (carts.length > 0) {
            return (
                <CartResult 
                    carts={ carts } 
                />
            )
        }
        return result;
    }

    render() {
        var { carts } = this.props;
        return (
            <Cart>
                { this.showCart(carts) }
                { this.showTotalAmount(carts) }
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired,
        onDeleteProductInCart : PropTypes.func.isRequired,
        onChangeMessage : PropTypes.func.isRequired,
        onUpdateProductInCart : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actions.deleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actions.changeMessage(message));
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actions.updateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
