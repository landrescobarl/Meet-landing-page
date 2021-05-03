/*
    - Crear un componente "BoxText" y asigna los textos segun el array de objetos text que
        considan con el "dataset.commentid" entregados como parametros cuando se renderisa.
    
    - Array.from(document.getElementsByClassName("boxText")).forEach(function (item) {});
        crea una array con los nodos que considan con la clase "boxText" para ser recoridos
        en un loop al mismo tiempos se va renderisando el componente "BoxText" y se extrae
        en la variable "commentId" los "dataset.commentid" de las clases.



*/


function BoxText({dataset}) {

    return (

        <React.Fragment>
            {text[dataset].par2=== " " ? null : <p className="boxText__overline">{text[dataset].par2}</p>}
            <h1 className="boxText__title">{text[dataset].title}</h1>
            <p className="boxText__text">{text[dataset].par1}</p>
        </React.Fragment>

    )
}

Array.from(document.getElementsByClassName("boxText")).forEach(function (item) {
    const commenId = parseInt(item.dataset.id - 1);
    ReactDOM.render(<BoxText dataset={commenId} />, item)
});