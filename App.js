import React from "react";
import ReactDOM from "react-dom/client";

//React Element1
const elem = <span>React element</span>;

//React Element2
const titleElement = (
  <h1 className="JSXClass" tabIndex="5">
    <h2>{elem}</h2>
    Hello React using JSX
  </h1>
);

//React Func Comp
const TitleFuncComp = () => (
  <h1 className="JSXClass" tabIndex="5">
    Hello React using JSX
  </h1>
);

const number = 10000;

const HeadingComp = () => (
  <div id="container">
    <h2>{titleElement}</h2>
    <TitleFuncComp />
    <h1> Hello React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(titleElement);
