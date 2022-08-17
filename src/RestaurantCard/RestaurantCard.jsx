import React from 'react';

class RestaurantCard extends React.Component {

  render() {
    return (
      <article className="resto-card">
        <div className="content">
          <figure className="resto-image">
            <img src={this.props.data.image} alt="restaurants item"/>
          </figure>
          <figure className="star-icon">
            <img src="/images/star.png" alt="star icon" />
            <p>{this.props.data.rating}</p>
          </figure>
          <div className="text">
            <h2>{this.props.data.name}</h2>
            <p>Res {this.props.data.reservation} for 2 people</p>
            <figure className="map-icon">
              <img src="/images/maps-and-flags.png" alt="map icon" />
              <p>5 min from VIT</p>
            </figure>
          </div>
        </div>
      </article>
    ) 
  }
}

export default RestaurantCard