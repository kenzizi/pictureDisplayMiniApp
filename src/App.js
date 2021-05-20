import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "./API/unsplash";
import "semantic-ui-css/semantic.min.css";
import ImageList from "./imageList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "state",
      images: [],
    };
  }
  onSearchSubmit = async (SearchText) => {
    this.setState({ search: SearchText });
    const response = await unsplash.get("/search/photos", {
      params: { query: SearchText },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ maginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
