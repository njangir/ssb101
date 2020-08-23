import React from "react";
import YouTube from "react-youtube";

function Video({ size }) {
  const opts = {
    width: size.width,
    height: size.height,
    playerVars: {
      autoplay: 1,
      allowfullscreen: 1,
      rel: 0,
    },
  };

  return <YouTube videoId="VXV02l1lIQw" opts={opts} />;
}

export default Video;
