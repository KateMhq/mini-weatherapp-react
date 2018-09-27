import React from "react";
import Thumb from "./Thumb";

class Thumbs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="thumbs" id="thumbs">
        {this.props.images.map(image => {
          return (
            <Thumb
              //receive function or data can be passed down two or more levels.
              //the function receivePhotos is defined in the parent App but is passed
              //down to the child of its child (Thumb)
              receivePhotos={this.props.receivePhotos}
              imageLink={image.urls.thumb}
              imgobj={image}
              // array of items need unique keys
              key={image.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Thumbs;
