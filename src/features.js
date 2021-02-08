import { get, isObject, isString } from "lodash";
import React from "react";

const addons = {
  serviceWorker: { id: "service-worker", enabled: false },
  restAPI: { id: "rest-api", enabled: true },
  cacheRedux: { id: "cache-redux", enabled: true },
};

const general = {
  homepage: { id: "homepage", enabled: true },
  login: { id: "login", enabled: true },
  register: { id: "register", enabled: true },
};

const orders = {
  checkout: { id: "checkout", enabled: true },
  orderSummary: { id: "order-summary", enabled: true },
  activeOrders: { id: "active-orders", enabled: false },
};

const features = {
  ...addons,
  ...general,
  ...orders,
};

export default features;

/* Checks if a feature is enabled */
export function isEnabled(feature) {
  if (isObject(feature)) {
    return get(feature, "enabled", false);
  } else if (isString(feature)) {
    const featureFlag = Object.values(features).find(
      (flag) => flag.id === feature
    );
    return get(featureFlag, "enabled", false);
  }
  return false;
}

/* A Higher Order Component that renders if a feature is enabled */
export function flaggedWith(feature, Feature, DisabledFeature = () => null) {
  return (props) =>
    isEnabled(feature) ? (
      <Feature {...props} />
    ) : (
      <DisabledFeature {...props} />
    );
}
