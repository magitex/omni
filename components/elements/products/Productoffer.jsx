import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Rating from '../Rating';
import {
    omniProductThumbnail,
    StrapiProductBadge,
    StrapiProductPriceExpanded,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import ModuleProductProgressbar from '~/components/elements/products/modules/ModuleProductProgressbar';

const Productoffer = ({ product }) => {
    return (
        <div className="ps-product ps-product--inner">
           
            
            <div className="ps-product__thumbnail">
            {omniProductThumbnail(product)}
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
            </div>
        </div>
    );
};

export default connect()(Productoffer);
