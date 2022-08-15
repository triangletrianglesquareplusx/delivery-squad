import React from 'react';

class RestaurantCard extends React.Component {

  render() {
    return (
      <article className="resto-card">
        <div className="content">
          <figure>
            <img src={this.props.data.image} alt="home item"/>
          </figure>
          <div className="text" style={{'justifyContent': 'center'}}>
            <h2>{this.props.data.name}</h2>
            <p style={{'textAlign': 'center'}}>{this.props.data.type}</p>
          </div>
        </div>
      </article>
    ) 
  }
}

export default RestaurantCard