import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    } 
    handleSearch(data) {
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${data.searchTerm}&api_key=eXShu0qkNNKfWPxhvPKsIjaKk61BevtU`)
        .then(resp => resp.json())
        //error this.setState is not a function when submit button pressed
        .then(data => 
            this.setState({
                gifs: data.data.map( gif => ({url: gif.images.original.url}))
            })
        )
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.handleSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}