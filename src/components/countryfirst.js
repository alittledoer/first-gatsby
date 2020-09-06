import React, { Component } from 'react'

export default class countryfirst extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <iframe title="vande video" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.data.clipSrc}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
