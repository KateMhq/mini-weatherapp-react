import React from 'react';

class Info extends React.Component {
constructor(){
  super()
}  
  render(){
    return (
      <div className="info">
        <p className="info__item info__item--conditions" id="conditions">{this.props.weather === undefined ? "Loading&hellip;": this.props.weather}</p>
        <p className="info__item info__item--credits">
          
        {this.props.currentImage === undefined ? "Loading&hellip;": 
          <a href={this.props.currentImage.links.html} id="credit-user">
          {this.props.currentImage === undefined ? "Loading&hellip;": this.props.currentImage.user.name}
          </a>}
          <span>on</span>
          <a href="#" id="credit-platform">Unsplash</a>
        </p>
      </div>
    );
  }
}

export default Info;
