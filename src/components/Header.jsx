import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../assets/logo.svg'

import './Header.scss'
import { auth } from '../firebase/firebase.utils'
import CartIcon from './cart/CartIcon'
import CartDropdown from './cart/CartDropdown'
import { selectCartHidden } from '../redux/cart/cart.selectors'
import { selectCurrentUser } from '../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Logout
        </div>
      ) : (
        <Link className="option" to="/login">
          Login
        </Link>
      )}
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps, null)(Header)
