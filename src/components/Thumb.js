import React from 'react';

class Thumb extends React.Component {
constructor() {
  super(); 

  this.handleClick = this.handleClick.bind(this)
  // bind function to "this" - i.e. class Thumb

}
handleClick(event) {
    this.props.receivePhotos(this.props.imgobj)
}


  render(){
    return (
    <img src={this.props.imageLink} onClick={this.handleClick} imgobj={this.props.imgobj}/>
    );
  }
}

export default Thumb;
