import React from "react"
import NavBar from "./component/NavBar"
import Hero from "./component/Hero"
import HeadLineCards from "./component/HeadLineCards"
import Food from "./component/Food"
import Category from "./component/Category"
import Footer from "./component/Footer"

export default function App(){
    return(
        <div>
            <NavBar />
            <Hero />
            <HeadLineCards />
            <Food />
            <Category />
            <Footer />
        </div>
    )
};
