import React, { Component } from "react";
import { Input } from "semantic-ui-react";
export class SearchBar extends Component {
  state = {
    searchText: "write ur name!",
  };
  onInputChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchText);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>image search</label>
            <Input
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Search..."
              onChange={this.onInputChange}
              value={this.state.searchText}
            />
            {this.state.searchText}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
