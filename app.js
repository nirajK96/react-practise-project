// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abe" },
//   "hellow world from react liabray"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),

    React.createElement("h2", {}, "i am an h2 tag"),
  ]),React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),

    React.createElement("h2", {}, "i am an h2 tag"),
  ])]
);








// id: "heading", xyz: "abe" --> attributes

// "hellow world from react liabray" --> childrens

// attributes + children = props'

// const = heading he ek JS object contain karta

// he heading banvla
//ata root element banvaycha react cha jithe DOM render honar
// 2nd link DOM chi

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);
