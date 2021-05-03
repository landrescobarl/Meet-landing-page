const SetImages = () => {
    const set = ['image1','image2','image3','image4']
    src = "./images/"
    return (
        <ul id='setImages' className='body__setImages  setImages'>
            {set.map(set =><li className='setImages__items'>
                <img src={src + set + ".jpg"} alt={set}/>
            </li>)}
        </ul>
    )
}