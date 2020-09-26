import React, { Component } from "react";
import "./post.scss";

export default class Post extends Component {
  state = {
    showInfo: false,
  };
  //toggle function
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    // console.log(this.props);
    // deconstruction
    const { id, city, img, name, info } = this.props.post;
    const { removePost } = this.props;
    return (
      <article className="post">
        <div className="img-container">
          <img src={img} alt="adventure" />
          <span className="close-btn" onClick={() => removePost(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="post-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
