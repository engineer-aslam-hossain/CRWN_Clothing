import React from "react";
import { connect } from "react-redux";

import { selectCollectionsFroPreview } from "../../redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collectionPreview/CollectionPreview";
import "./collectionsOverView.scss";

const CollectionsOverView = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherColletionProps }) => (
      <CollectionPreview key={id} {...otherColletionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsFroPreview,
});

export default connect(mapStateToProps)(CollectionsOverView);
