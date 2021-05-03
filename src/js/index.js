

// Componente de la secciones del sitio web,  recibe como informacion, los objetos que lo componen
var Section = function Section(props) {
    var dataset = props.commentId,
        classNames = props.classNames;
    classNames = classNames[0] + "  " + classNames[1];
    console.log(props.area);

    return React.createElement(
        "section",
        { className: classNames },
        React.createElement(
            "div",
            { "class": "section__number" },
            React.createElement("div", { "class": "line" }),
            React.createElement(
                "span",
                null,
                '0' + dataset - 1
            )
        ),
        props.area != "head" ? null : React.createElement(
            "div",
            { className: "head__imgHero" },
            React.createElement("div", { className: "item  imgHero--left" }),
            React.createElement("div", { className: "item  imgHero--right" })
        ),
        props.area != "body" ? null : React.createElement(SetImages, null),
        React.createElement("div", { className: "boxText", "data-id": dataset }),
        props.buttons.length < !0 ? null : React.createElement(Button, { buttons: props.buttons })
    );
};

function App() {

    console.log(text);
    return React.createElement(
        React.Fragment,
        null,
        text.map(function (text) {
            return React.createElement(
                Section,
                text,
                " "
            );
        })
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('main__content'));