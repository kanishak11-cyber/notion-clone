import React from "react";
// 2a9d99
const Calender = () => {
  const svgStyle = {
    fill: "#2a9d99",
    color: "#2a9d99",
    height: "100%",
    width: "100%",
  };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="1em"
        className=""
        style={svgStyle}
      >
        <defs fill="currentColor"></defs>
        <path
          d="m48,12v-6h-6v6h-20v-6h-6v6h-8v40h48V12h-8Zm-26,35h-8v-7h8v7Zm0-12h-8v-7h8v7Zm14,12h-8v-7h8v7Zm0-12h-8v-7h8v7Zm14,12h-8v-7h8v7Zm0-12h-8v-7h8v7Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default Calender;
