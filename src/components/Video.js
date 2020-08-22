import React from "react";
import YouTube from "react-youtube";

function Video({ size }) {
  const opts = {
    height: size.height,
    playerVars: {
      autoplay: 1,
      allowfullscreen: 1,
    },
  };

  return <YouTube videoId="VXV02l1lIQw" opts={opts} />;
}

export default Video;
