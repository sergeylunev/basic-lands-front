import React, { Component } from 'react';
import Card from '../Card/Card';

class Cards extends Component {
    constructor() {
        super();
        this.state ={
            cards: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/cards')
            .then(result => {
                return result.json();
            })
            .then(data => {
                this.setState({
                    cards: data
                })
            });
    }

    render() {
        return (
            <div>
                {this.state.cards.map((card, i) => {
                    return <Card card={card} />
                })}
            </div>
        );
    }
}

export default Cards;
