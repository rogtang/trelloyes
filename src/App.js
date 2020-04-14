import React from 'react';
import List from './list'
import './App.css';
import STORE from './STORE';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, 
      ...rest} = obj;
  return rest;
}


class App extends React.Component {

  state = {
      store: STORE
  }

  handleAddCard = (newListId) => {
    const newCard = newRandomCard();

    const newLists = this.state.store.lists.map(list => {
      if (list.id === newListId) {
	    return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })
    
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  }
  
  handleDeleteCard = (cardIdToDelete) => {
    const newLists = this.state.store.lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardIdToDelete)
    }));
    const newCard = omit(this.state.store.allCards, cardIdToDelete);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCard
      }
    })
  }

  render () {
    {/*not necessary to create store variable, could use this.state.store as well*/}
    const {store} = this.state;
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
        {store.lists.map((list) =>
        <List key = {list.id}
              header = {list.header}
              id={list.id}
              cards = {list.cardIds.map((id) => store.allCards[id])}
              onAddCard = {this.handleAddCard}
              onDeleteCard = {this.handleDeleteCard}
        />)}
        </div>
      </main>
    );
  }


}


export default App;
