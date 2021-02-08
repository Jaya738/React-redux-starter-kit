import React from "react";
import features, { flaggedWith } from "../../features";

function OrderSummary() {
  return <div>Order Summary</div>;
}

export default flaggedWith(features.orderSummary, OrderSummary);
