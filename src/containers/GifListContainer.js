import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{

  state =({
    gifs: []
  })

componentDidMount = async () =>{
 this.renderGifs
}
getGIFs = (query = "dog") => {
    let rawGIFs = await fetch('https://api.giphy.com/v1/gifs/search?q=${query}&api_key=iomhGH1RSXpTcjA6anEdlrBzi8a0o73y&rating=g')
    let gifs = await rawGIFs.json()
    this.setState({
        gifs: gifs.data
        // .map( gif => ({ url: gif.images.original.url }) )
    })
    console.log(gifs.data)
}
render(){
    return(
        <>
        < GifSearch getGIfs={this.getGIFs}/>
        <GiftList gifs={this.state.gifs}/>
        </>
    )
}

}

export default GifListContainer