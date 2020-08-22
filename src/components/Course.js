import React, { useState, useEffect, useRef } from "react";
import Video from "./Video";

function Course(props) {
  const thisDiv = useRef(null);
  const [size, setSize] = useState({ width: 560, height: 315 });

  useEffect(() => {
    function handleResize(width) {
      setSize({ width, height: window.innerHeight });
      console.log(size);
    }

    window.addEventListener("resize", handleResize);

    handleResize(thisDiv.current.offsetWidth);

    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={thisDiv}
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 1,
        top: 0,
      }}
    >
      <Video size={size} />
    </div>
  );
}

export default Course;
