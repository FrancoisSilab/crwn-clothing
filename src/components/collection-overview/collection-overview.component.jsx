import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../collection-preview/collection-preview.component.jsx";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = state =>
  createStructuredSelector({
    collections: selectCollectionForPreview,
  });

export default connect(
  mapStateToProps,
  null,
)(CollectionOverview);
