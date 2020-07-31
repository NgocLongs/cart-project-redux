import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

    SubTotal = (price, quantity) => {
        var result = 0;
        result = price * quantity;
        return result;

    }

    deleteProduct = (product) => {
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

    render() {
        var { cart } = this.props;
        var { quantity } = cart;
        return (
            <tr>
                <th scope="row">
                    <img src={ cart.product.image }
                        alt={ cart.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ cart.product.name }</strong>
                    </h5>
                </td>
                <td>{ cart.product.price } $</td>
                <td className="center-on-small-only">
                    <span className="qty">{ quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            onClick={ () => this.onUpdateQuantity(cart.product, cart.quantity - 1) }
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <div>—</div>
                        </label>
                        <label  
                            onClick={ () => this.onUpdateQuantity(cart.product, cart.quantity + 1) }
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <div>+</div>
                        </label>
                    </div>
                </td>
                <td>{ this.SubTotal(cart.product.price, cart.quantity)} $</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        data-original-title="Remove item"
                        onClick={ () => this.deleteProduct(cart.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
