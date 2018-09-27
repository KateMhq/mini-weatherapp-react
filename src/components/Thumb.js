import React from "react";

class Thumb extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    // bind function to "this" - i.e. class Thumb
  }
  handleClick(event) {
    // use receiver function to pass data back to parent
    this.props.receivePhotos(this.props.imgobj);
  }

  render() {
    return (
      <img
        // controlled inputs
        src={this.props.imageLink}
        onClick={this.handleClick}
        imgobj={this.props.imgobj}
      />
    );
  }
}

export default Thumb;
