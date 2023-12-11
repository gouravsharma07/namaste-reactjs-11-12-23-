const parent = React.createElement("div", 
    {id: "parent"}, 
    React.createElement("div",
        {id: "child"},[
            React.createElement("h1",{},"This is H1 tag!"),
            React.createElement("h2",{},"This Is Child-Two H2 tag")
        ]
    ),
    React.createElement("div",
        {id: "child-2"},[
            React.createElement("h1",{},"This Is Child-Two H1 tag"),
            React.createElement("h2",{},"This Is Child-Two H2 tag")
        ]
        )
)



// const heading = React.createElement("h1", {id: "headimg", xyz: "abc"}, "This is Heading")

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)