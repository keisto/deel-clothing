import CartActionTypes from "./cart.types.js"
import { addItemToCart, removeItemFromCart } from "./cart.utils"

const initialState = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case CartActionTypes.ADD_ITEM_TO_CART:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) }
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      }
    default:
      return state
  }
}

export default cartReducer
