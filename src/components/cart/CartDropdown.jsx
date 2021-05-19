import React from 'react'

import './CartDropdown.scss'
import Button from '../Buttons'
import { connect } from 'react-redux'
import CartItem from './CartItem'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>Go to checkout</Button>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
