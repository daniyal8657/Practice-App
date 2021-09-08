import React from "react";
import { Counter } from "./Components/Counter/Counter";

export const Landing = () => {
  return (
    <div>
      {/* <h1
        style={{
          color: "rgb(65,224,253)",
          margin: "250px",
          textAlign: "center",
          background: "rgb(32,35,42)",
          padding: "30px",
          boxShadow:"0 0 5px black",
          border:"2px solid rgb(65,224,253)",
        }}
      >
        Landing Page
      </h1> */}
      <Counter/>
    </div>
  );
};
