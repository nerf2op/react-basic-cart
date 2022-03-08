import React from "react";
import "./body.css";
import Card from "./Card";
const Body = ({ globalData }) => {
  return <div className="mainBody">
      {
          globalData.map((val)=>{
            return  <Card key={val.id} 
            title={val.title} 
            image={val.image}
            price={val.price}
             />
          })
      }
      </div>;
};

export default Body;
