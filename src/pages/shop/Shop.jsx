import React from "react"
import {Route} from 'react-router-dom'

import CollectionOverview from "../../components/shop/collection-overview/CollectionOverview"
import Collection from "../collection/Collection"


const Shop = ({ match }) => (
  <div className="shop">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
)

export default Shop
