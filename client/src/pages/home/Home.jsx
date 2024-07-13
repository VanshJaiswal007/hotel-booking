import React from "react";
import "./home.css"
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
export default function Home(){
    return(
         <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
               <Featured/> 
               <h1 className="homeTitle">Browse by property type</h1>
               <PropertyList/>
               <h1 className="homeTtile">Homes guests love</h1>
               <FeaturedProperties/>
               <MailList/>
               <Footer/>
            </div>   
        </div>
    );
};