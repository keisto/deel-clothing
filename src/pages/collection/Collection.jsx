import React from "react"
import { connect } from "react-redux"

import CollectionItem from "../../components/shop/CollectionItem"
import { selectCollection } from "../../redux/shop/shop.selectors"

import "./Collection.scss"

const Collection = ({ collection }) => {
    const { title, items } = collection
    console.log('collection:', collection);
    return (
      <div className='collection'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items && items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection)
