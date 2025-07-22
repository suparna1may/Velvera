import React from 'react'
import Layout from '../../compontnts/Layout/Layout'
import Arrival from '../../compontnts/Arrival/Arrival'
import Banner from '../../compontnts/Banner/Banner'
import Category from '../../compontnts/Category/Category'
import HeroBan from '../../compontnts/HeroBan/HeroBan'
import ProductCard from '../../compontnts/ProductCard/ProductCard'
import PromoBan from '../../compontnts/PromoBan/PromoBan'
import Service from '../../compontnts/Service/Service'

function Home() {
  return (
    <>
    <Layout>
       <Banner></Banner>
       <Arrival></Arrival>
       <Category></Category>
       <HeroBan></HeroBan>
       <ProductCard></ProductCard>
       <PromoBan></PromoBan>
       <Service></Service>
    </Layout>
      
    </>
  )
}

export default Home
