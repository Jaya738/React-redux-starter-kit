import React from "react";
import features, { flaggedWith } from "../../features";

function ActiveOrders() {
  return <div>Active Orders</div>;
}

export default flaggedWith(features.activeOrders, ActiveOrders);
