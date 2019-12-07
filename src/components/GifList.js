import React from 'react'

const GifList = (props) => {

    return(
        <ul>
            {props.gifs.map(gif => <li><img src={gif.url} alt="gif" key={gif.id} /></li>)}
        </ul>
    )
}

export default GifList