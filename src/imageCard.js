import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.imageRref = React.createRef();
  }
  componentDidMount() {
    this.imageRref.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRref.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRref}
          src={urls.regular}
          alt={description}
          onClick={() => window.open(urls.regular, "_blank")}
        />
      </div>
    );
  }
}
export default ImageCard;
