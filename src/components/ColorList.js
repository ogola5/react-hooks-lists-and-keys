import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color)=>{
    return <li key={color} style={{color:color}}>{color}</li>

  });
  
}
export default ColorList