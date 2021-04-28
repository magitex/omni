import React from 'react';
import Link from 'next/link';
import Rating from '../Rating';

import {
    omniProductThumbnail,
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
    // Views
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = omniProductThumbnail(product);
    const badgeView = StrapiProductBadge(product);

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                {badgeView}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                
                <div className="ps-product__content">
                   <Link href="/product/[pid]" as={`/product/${product.itemTypeID}`}>
                        <a className="ps-product__title">{product.itemName}</a>
                    </Link>
                     <Link href="/shop">
                    <a className="ps-product__vendor"> {product.itemPrice}</a>
                    </Link>
                    <div className="ps-product__rating">
                       <Rating />
                        <span>{product.itemRating}</span>
                    </div>
                    
                </div>
                <div className="ps-product__content hover">
                    <Link href="/product/[pid]" as={`/product/${product.itemTypeIDid}`}>
                        <a className="ps-product__title">{product.itemName}</a>
                    </Link>
                    {priceView}
                </div>
            </div>
        </div>
    );
};

export default Product;
