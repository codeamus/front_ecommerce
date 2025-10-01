export const promoBannerQuery = `*[_type == "promoBanner" && active == true][0]{
  _id, 
  title, 
  subtitle, 
  ctaText, 
  ctaUrl, 
  image
}`;
