import CartActionTypes from './cart.types.js'

const initialState = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case CartActionTypes.ADD_ITEM_TO_CART:
      return { ...state, cartItems: [...state.cartItems, payload] }
    default:
      return state
  }
}

export default cartReducer
