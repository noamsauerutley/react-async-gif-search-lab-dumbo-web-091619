import React from 'react'

class GifSearch extends React.Component {
    state ={
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getGifs(this.state.query)
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
            </form>
            </>
        )
    }
}

export default GifSearch