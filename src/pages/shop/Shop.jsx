import React from 'react'

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/shop/CollectionPreview'

class Shop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default Shop
