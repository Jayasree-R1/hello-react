/**
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag 1</h1>
 *          <h1>I am h1 tag 2</h1>
 *      </div>
 * </div>
 *
 *
 */

const heading = React.createElement(
  "h1",
  { id: "heading", className: "randomClassName" },
  "Hello World from React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

//console.log(heading); // object not tag yet.
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // render function is to take the heading object and convert into heading tag and put it on the top
root.render(parent);
