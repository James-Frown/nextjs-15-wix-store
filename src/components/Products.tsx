/* eslint-disable @next/next/no-img-element */

import { products } from "@wix/stores";
import Link from "next/link";
import { media as wixMedia } from "@wix/sdk";

interface ProductProps {
  product: products.Product;
}

export default function Product({ product }: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  const reSizedImageUrl = mainImage?.url
    ? wixMedia.getScaledToFillImageUrl(mainImage.url, 700, 700, {})
    : null;

  return (
    <Link className="border h-full" href={`/products/${product.slug}`}>
      <div className="overflow-hidden">
        <img
          className="transition-transform duration-300 hover:scale-110"
          src={reSizedImageUrl || "/placeholder.png"}
          alt={mainImage?.altText || ""}
        />
      </div>

      <div className="space-y-3 p-3">
        <h1 className="text-lg font-bold"> {product?.name}</h1>
        <div
          className="line-clamp-5"
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
        />
      </div>
    </Link>
  );
}
