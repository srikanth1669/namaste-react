// const header = React.createElement("h1", {id: "header", class: "header"}, "Hi");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Hi I'm h1 tag"), React.createElement("h2",{},"Hi I'm h2 tag")]
        )
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);