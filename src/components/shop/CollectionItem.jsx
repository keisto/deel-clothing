import React from 'react'
import './CollectionItem.scss'
import Button from '../Buttons'
import { addItemToCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
