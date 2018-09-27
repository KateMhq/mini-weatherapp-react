import React from 'react';
import Thumb from './Thumb';

class Thumbs extends React.Component {
constructor() {
  super();
}

  render(){
    return (
      <div className="thumbs" id="thumbs">
      {this.props.images.map(image => {
        return <Thumb receivePhotos = {this.props.receivePhotos} imageLink={image.urls.thumb} imgobj={image} key={image.id}/>
      })}
      </div>
    );
  }
}

export default Thumbs;
