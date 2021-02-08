import React from "react";
import features, { flaggedWith } from "../../features";

function Home() {
  return <div>home</div>;
}

export default flaggedWith(features.homepage, Home);
