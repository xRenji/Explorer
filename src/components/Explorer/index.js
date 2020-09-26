import React, { Component } from "react";
import Post from "../Post";
import "./explorer.scss";
import { data } from "../../data.js";
export default class Explorer extends Component {
  state = {
    // state to display data
    explorer: data,
  };

  //function to remove post
  removePost = (id) => {
    console.log(id);
    const { explorer } = this.state;
    console.log(explorer);
    const sortedData = explorer.filter((tour) => tour.id !== id);
    this.setState({
      explorer: sortedData,
    });
    console.log(explorer);
  };
  render() {
    const { explorer } = this.state;
    return (
      <section className="explorer-list">
        {
          // Iterate the data
          // Callback function
          explorer.map((post) => (
            <Post key={post.id} post={post} removePost={this.removePost} />
          ))
        }
      </section>
    );
  }
}
