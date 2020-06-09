import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";
import CollectionsOverView from "../../components/collectionsOverView/collectionsOverView";
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
