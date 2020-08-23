import React, { useState, useEffect, useRef } from "react";
import Video from "./Video";

function Course() {
  const thisDiv = useRef(null);
  const [size, setSize] = useState({ width: 560, height: 315 });

  useEffect(() => {
    setSize({
      width: thisDiv.current.offsetWidth,
      height: thisDiv.current.offsetHeight,
    });
    console.log(thisDiv.current.offsetWidth);
  }, []);

  return (
    <div ref={thisDiv} id="video">
      <Video size={size} />
    </div>
  );
}

export default Course;
