import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <img src={"http://localhost:8000" + this.props.card.image} alt="" />
        );
    }
}

export default Card;