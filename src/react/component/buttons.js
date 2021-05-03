
const Button = (props) => {
    let button = props.buttons

    return (
       <div className='section__buttons'>
           { 
            button.map(button =><button className="button section__button">{button}</button>)
           }
       </div>
    )
}
     
