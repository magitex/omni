import React, { useState, useEffect } from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';
// import Network from '~/components/helpers/networks';
const MenuCategoriesDropdown = () => {
    // async function getCategories() {
    //     console.log('123 ', localStorage.getItem('token'));
    //     let data;
    //     if (localStorage.getItem('token') !== null) {
    //         data = await Network.dashboardData();
    //         console.log('setp1', localStorage.getItem('token'));
    //     } else {
    //         const token = await Network.getToken();
    //         // setTimeout(async()=>{
    //         if (token) data = await Network.dashboardData();

    //         // },1000)
    //     }
    //     // console.log("123 token",data);
    //     const tempBanners = data && data.data.data.dashboardPanel.banners;
    //     console.log('123 banners>>', tempBanners);
    //     setBanners(tempBanners);
    // }

    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Shop by Department</span>
            </div>
            <div className="menu__content">
                <Menu
                    source={menuData.product_categories}
                    className="menu--dropdown"
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
