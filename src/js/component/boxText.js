/*
    - Crear un componente "BoxText" y asigna los textos segun el array de objetos text que
        considan con el "dataset.commentid" entregados como parametros cuando se renderisa.
    
    - Array.from(document.getElementsByClassName("boxText")).forEach(function (item) {});
        crea una array con los nodos que considan con la clase "boxText" para ser recoridos
        en un loop al mismo tiempos se va renderisando el componente "BoxText" y se extrae
        en la variable "commentId" los "dataset.commentid" de las clases.



*/

function BoxText(_ref) {
    var dataset = _ref.dataset;


    return React.createElement(
        React.Fragment,
        null,
        text[dataset].par2 === " " ? null : React.createElement(
            "p",
            { className: "boxText__overline" },
            text[dataset].par2
        ),
        React.createElement(
            "h1",
            { className: "boxText__title" },
            text[dataset].title
        ),
        React.createElement(
            "p",
            { className: "boxText__text" },
            text[dataset].par1
        )
    );
}

Array.from(document.getElementsByClassName("boxText")).forEach(function (item) {
    var commenId = parseInt(item.dataset.id - 1);
    ReactDOM.render(React.createElement(BoxText, { dataset: commenId }), item);
});