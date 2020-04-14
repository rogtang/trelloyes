import React from 'react';
import Card from './card'
import './list.css';

//List component
function List(props) {
    return (
        <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {props.cards.map((card) =>
            //render Card component here by .map of cards prop
            <Card key = {card.id}
                  id={card.id}
                  title = {card.title}
                  content = {card.content}
                  onDeleteCard = {props.onDeleteCard}
            />)}
        <button type="button" className="List-add-button" onClick = {() => props.onAddCard(props.id)}>
              + Add Random Card
            </button>
        </div>
        </section>
          
    )
}

export default List;
