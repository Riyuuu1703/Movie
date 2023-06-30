import React from 'react'
import "./home.scss";
import HeroBanner from './herobanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


export const Home = () => {
  return (
    <div className='homePages'>
        <HeroBanner/>
        <Trending />
        <Popular/>
        <TopRated/>
         

    </div>
     
  );
}

export default Home;