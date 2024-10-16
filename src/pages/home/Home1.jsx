import React, { useState } from 'react'
import './home.css'
import Header from '../../component/header/Header';
import ExploreMenu from '../../component/Explore Menu/ExploreMenu'
import FoodDisplay from '../../component/Food display/FoodDisplay';
import AppDownload from '../../component/AppDownload/AppDownload';
 const Home1 = () => {
    const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}
export default Home1;
