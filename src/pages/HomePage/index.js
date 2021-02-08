import React from "react";
import features, { flaggedWith } from "../../features";

function Home() {
  return <div>home page</div>;
}

export default flaggedWith(features.homepage, Home);
