import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import Company from "./Company";
import Footer from "./Footer";
function Home(){
    return <div>
        <Navigation/>
        <Main/>
        <Company/>
        <Footer/>
    </div>
}
export default Home;