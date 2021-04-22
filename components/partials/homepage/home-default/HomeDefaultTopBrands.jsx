import React,{useContext} from 'react';
import Link from 'next/link';
import {HomeContext} from '~/components/helpers/context';

const HomeDefaultTopBrands = () => {
    const {prodcategories}=useContext(HomeContext);
   return <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Categories11</h3>
            <div className="row">
                {prodcategories && prodcategories.map((pc,key)=>(
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 " key={key}>
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src={pc.itemImage} alt="martfury" />
                        {/* <img src="/static/img/categories/1.jpg" alt="martfury" /> */}
                        <p>{pc.itemName}</p>
                        {/* <p>Electronics</p> */}
                    </div>
                </div>
                ))}
                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/2.jpg" alt="martfury" />
                        <p>Clothings</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/3.jpg" alt="martfury" />
                        <p>Computers</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/4.jpg" alt="martfury" />
                        <p>Home & Kitchen</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/5.jpg" alt="martfury" />
                        <p>Health & Beauty</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/6.jpg" alt="martfury" />
                        <p>Health & Beauty</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/7.jpg" alt="martfury" />
                        <p>Jewelry & Watch</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/8.jpg" alt="martfury" />
                        <p>Technology Toys</p>
                    </div>
                </div>
             */}
            </div>
        
        </div>
    </div>
};

export default HomeDefaultTopBrands;
