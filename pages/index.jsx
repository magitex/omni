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
import HomeDefaultOffer from '~/components/partials/homepage/home-default/HomeDefaultOffer';
import HomeDefaultTopBrands from '~/components/partials/homepage/home-default/HomeDefaultTopBrands';
import Helper from '~/components/helpers/networks';
import {HomeContext} from '~/components/helpers/context';

const HomepageDefaultPage = () => {
    const [banners, setBanners] = useState([]);
    const [prodcategories, setProdCategories] = useState([]);
    const [offers, setoffers] = useState([]);
    const [dealsOfTheDay, setdealsOfTheDay] = useState([]);
    const [topBrands, settopBrands] = useState([]);
    const [trendingItems, settrendingItems] = useState([]);
    async function getBannerItems() {
       
        console.log("123 ",localStorage.getItem("token"));
        let data;
       
        const token=await Helper.getToken();
        console.log("new token11",localStorage.getItem("token"));
        data= await Helper.dashboardData();
        console.log("data",data);
        const tempBanners =data && data.data.data.dashboardPanel.banners; 
        const tempProdCategories =data && data.data.data.dashboardPanel.productCategories; 
        const tempoffers =data && data.data.data.dashboardPanel.offers; 
        const tempdealsOfTheDay =data && data.data.data.dashboardPanel.dealsOfTheDay; 
        const temptopBrands =data && data.data.data.dashboardPanel.topBrands; 
        const temptrendingItems =data && data.data.data.dashboardPanel.trendingItems; 

        console.log("123 banners>>",tempBanners)
        setBanners(tempBanners);
        setProdCategories(tempProdCategories);
        setoffers(tempoffers);
        setdealsOfTheDay(tempdealsOfTheDay);
        settopBrands(temptopBrands);
        settrendingItems(temptrendingItems);

    }

    useEffect(()=>{ 
             getBannerItems();
    },[])
    console.log("123 get",banners)
    return (
        <HomeContext.Provider
        value={{
            banners,
            prodcategories,
            offers,
            dealsOfTheDay,
            topBrands,
            trendingItems
        }}
        >
        <ContainerHomeDefault title="Multipurpose Marketplace React Ecommerce Template">
            <HomeDefaultBanner /> 
            <HomeDefaultOffer  collectionSlug="deal-of-the-day" />
            <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
            <HomeDefaultTopBrands />             
            <HomeDefaultProductListing
                collectionSlug="consumer-electronics"
                title="TrendingItems"
            />
            <HomeDefaultCategories />
			 <SiteFeatures />  
             <Newletters />
        </ContainerHomeDefault>
        </HomeContext.Provider>
    );
};

export default HomepageDefaultPage;
