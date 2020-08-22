import React, { Component } from "react";
import PropTypes from "prop-types";
//import YouTubeIcon from "@material-ui/icons/YouTube";

class CornerItem extends Component {
  render() {
    const cornerItem = {
      position: "absolute",
      width: "30px",
      height: "30px",
      alignItems: "center",
      verticalAligh: "center",
      margin: "20px",
    };
    return (
      <div
        onClick={this.props.onClick}
        style={cornerItem}
        className="cornerItem"
      >
        <svg width="60" height="60">
          <circle cx="30" cy="30" r="30" fill="orange" />
          <circle cx="30" cy="30" r="20" fill="white" />
          <circle cx="30" cy="30" r="10" fill="green" />
        </svg>
      </div>
    );
  }
}

CornerItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CornerItem;
