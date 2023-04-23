import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data"

export default function App(){
 const cards = data.map(item =>{
    return (
      <Main
      key = {item.id}
       img = {item.coverImg}
       Location = {item.Location}
       googleMapsUrl = {item.googleMapsUrl}
       name = {item.name}
       startDate = {item.startDate}
       endDate = {item.endDate}
       description = {item.description}
      />
    )
  })



    return(
        <div className="app">
            <Navbar/>
            <section className="cards-list">
              {cards}
            </section>
        </div>
    )
}