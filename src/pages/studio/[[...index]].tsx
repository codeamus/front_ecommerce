import React from "react";
import { Studio } from "sanity";
import config from "../../../studio/sanity.config";

export default function StudioPage() {
  return <Studio config={config} />;
}
