import React from "react";
import "./button1.css";
const Button1 = (props) => {
  return (
    <>
      <button
        className="uibtnctrl"
        onClick={() => props.handleContent(props.index)}
      >
        {props.number}
      </button>
    </>
  );
};
const Button2 = () => {
  return (
    <>
      <button className="uibtnctrlsecond">0</button>
    </>
  );
};
const Button3 = () => {
  return (
    <>
      <button className="uibtnctrlthird">0</button>
    </>
  );
};
const Button4 = (props) => {
  return (
    <>
      <button
        className="uibtnctrlfour"
        onClick={() => props.handleContent(props.index)}
      >
        {props.number}
      </button>
    </>
  );
};
export { Button1, Button2, Button3, Button4 };
