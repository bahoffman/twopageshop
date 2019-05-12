import React from "react"
import { Helmet } from "react-helmet"

// Structured Data for Google Shopping
// https://developers.google.com/search/docs/guides/intro-structured-data
// https://support.google.com/merchants/answer/7052112?visit_id=636920354472130704-1917801247&hl=en&rd=1
// https://developers.google.com/search/docs/data-types/product#guidelines
// https://support.google.com/merchants/answer/7331077?hl=en&ref_topic=6386199

const StructData2 = props => {
  let ldjson = `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "${props.product.name}",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "description":  "${props.product.description}",
    "sku":  "${props.product.sku}",
    "mpn":  "${props.product.mpn}",
    "brand": {
      "@type": "Thing",
      "name":  "${props.product.brand}"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Fred Benson"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "89"
    },
    "Category": "Clothing & Accessories > Clothing > Dresses",
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/anvil",
      "priceCurrency":  "${props.product.currency}",
      "price":  "${props.product.price}",
      "priceValidUntil": "2020-11-05",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Executive Objects"
      }
    }
  }`
  //const obj = JSON.parse(ldjson)

  //obj.name = props.product.name
  //ldjson = JSON.stringify(obj)
  return (
    <Helmet>
      <script type="application/ld+json">{ldjson}</script>
    </Helmet>
  )
}

export default StructData2
