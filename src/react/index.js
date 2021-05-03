

// Componente de la secciones del sitio web,  recibe como informacion, los objetos que lo componen
const Section = (props) => {
    let dataset = props.commentId, classNames = props.classNames;
    classNames = classNames[0] + "  " + classNames[1]
    console.log(props.area)

    return (
        <section className={classNames}>

            <div class="section__number">
                <div class="line"></div>
                <span>{'0' + dataset - 1}</span>
            </div>


            {/* en caso de props.area sea igual a head agregar la seccion de head__imghero  */}
            {
                props.area != "head" ? null :
                    <div className='head__imgHero'>
                        <div className='item  imgHero--left'></div>
                        <div className='item  imgHero--right'></div>
                    </div>
            }

            {/* en caso de props.area sea igual a body agregar el contenedor setImages  */}
            {
                props.area != "body" ? null :
                    <SetImages />
            }

            <div className='boxText' data-id={dataset}></div>

            {/* en caso de props.area sea igual a foot agregar los botones  */}
            {
                props.buttons.length < !0 ? null :
                    <Button buttons={props.buttons} />
            }
        </section >
    )
}



function App() {

    console.log(text)
    return (
        <React.Fragment>
            {text.map(text => <Section {...text}> </Section>)}
        </React.Fragment>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('main__content')
);
