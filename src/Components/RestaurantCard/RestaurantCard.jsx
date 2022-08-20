import React from 'react';

function RestaurantCard(props) {

    return (
      <article className="relative flex flex-row flex-wrap justify-center bg-gray-100 resto-card">
        <div className="flex flex-col flex-wrap content">
          <figure className="resto-image">
            <img src={props.data.image} alt="restaurants item"/>
          </figure>
          <figure className="absolute flex items-center bg-gray-100 star-icon">
            <img src={require("../../Assets/star-resto.png")} alt="star icon" />
            <p>{props.data.rating}</p>
          </figure>
          <div className="flex flex-col text">
            <h2 className="font-medium resto-name">{props.data.name}</h2>
            <p>Res {props.data.reservation} for 2 people</p>
            <figure className="flex flex-row map-icon">
              <img src={require("../../Assets/map-resto.png")} alt="map icon" />
              <p>5 min from VIT</p>
            </figure>
          </div>
          <button className="flex flex-col items-center text-purple-700 explore-button">Explore</button>
        </div>
      </article>
    ) 
}

export default RestaurantCard