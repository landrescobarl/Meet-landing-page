
var Button = function Button(props) {
    var button = props.buttons;

    return React.createElement(
        "div",
        { className: "section__buttons" },
        button.map(function (button) {
            return React.createElement(
                "button",
                { className: "button section__button" },
                button
            );
        })
    );
};