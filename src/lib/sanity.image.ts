import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./sanity.client";

// Crea el builder
const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}
