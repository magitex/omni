import React, { useEffect,createContext,useState } from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import HomeDefaultCategories from '~/components/partials/homepage/home-default/HomeDefaultCategories';

import Helper from '~/components/helpers/networks';
import {HomeContext} from '~/components/helpers/context';

const HomepageDefaultPage = () => {
    const [banners, setBanners] = useState([]);
    const [prodcategories, setProdCategories] = useState([]);
    async function getBannerItems() {
       
        console.log("123 ",localStorage.getItem("token"));
        let data;
        if(localStorage.getItem("token")!==null){
            data =await Helper.dashboardData()
        console.log("setp1",localStorage.getItem("token"),);
        }else{
            const token=await Helper.getToken();
            // setTimeout(async()=>{
if(token)
   data= await Helper.dashboardData();

            // },1000)
        }
        // console.log("123 token",data);
        const tempBanners =data && data.data.data.dashboardPanel.banners; 
        const tempProdCategories =data && data.data.data.dashboardPanel.productCategories; 
        console.log("123 banners>>",tempBanners)
        setBanners(tempBanners);
        setProdCategories(tempProdCategories);
    }

    useEffect(()=>{ 
             getBannerItems();
    },[])
    console.log("123 get",banners)
    return (
        <HomeContext.Provider
        value={{
            banners,
            prodcategories
        }}
        >
        <ContainerHomeDefault title="Multipurpose Marketplace React Ecommerce Template">
            <HomeDefaultBanner />
            <HomeDefaultCategories />

            <SiteFeatures />
            <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
            <HomeAdsColumns />
            <HomeDefaultTopCategories />
            <HomeDefaultProductListing
                collectionSlug="consumer-electronics"
                title="Consumer Electronics"
            />
            <HomeDefaultProductListing
                collectionSlug="clothings"
                title="Clothings"
            />
            <HomeDefaultProductListing
                collectionSlug="garden-and-kitchen"
                title="Garden & Kitchen"
            />
            <HomeAds />
            <DownLoadApp />
            <NewArrivals collectionSlug="new-arrivals-products" />
            <Newletters />
        </ContainerHomeDefault>
        </HomeContext.Provider>
    );
};

export default HomepageDefaultPage;
