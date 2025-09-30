import React from "react";
import { Studio } from "sanity";
// usa tu config REAL; por lo que vi, la tienes en la raíz:
import config from "../../studio/sanity.config";

export default function StudioApp() {
  return <Studio config={config} />;
}
