import React from "react";

const Home = () => {
  const svgStyle = {
    fill: "#ea4e43",
    color: "#ea4e43",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="1em"
        className=""
        style={svgStyle}
      >
        <defs fill="currentColor"></defs>
        <path
          d="m56,34h-7v20h-12v-16h-10v16h-12v-20h-7v-4L32,6l9,9v-7h8v15l7,7v4Z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
};

export default Home;
