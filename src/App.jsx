import React, {useState} from "react";
import './App.css';

const App = () => {
  const [cardList, setCardList] = useState([
    {id: 1, order:3, title: 'Card 3', text: 'My heart is open.'},
    {id: 2, order:1, title: 'Card 1', text: 'It is my life.'},
    {id: 3, order:2, title: 'Card 2', text: 'Now or never.'},
    {id: 4, order:4, title: 'Card 4', text: 'I did it my way!'}, 
    {id: 5, order:6, title: 'Card 6', text: 'Stand your ground.'},
    {id: 6, order:9, title: 'Card 9', text: 'Life is beautiful.'},
    {id: 7, order:7, title: 'Card 7', text: 'You can win, if you want.'},
    {id: 8, order:8, title: 'Card 8', text: 'Never give up!'},
    {id: 9, order:12, title: 'Card 12', text: 'Just do it!'},
    {id: 10, order:11, title: 'Card 11', text: 'Do what you love.'},
    {id: 11, order:5, title: 'Card 5', text: 'Dreams come true.'},
    {id: 12, order:10, title: 'Card 10', text: 'Love what you do.'} 
  ]);

  const [currentCard, setcurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    console.log('drag', card);
    setcurrentCard(card);
  }

  function dragLeaveHandler(e) {
    e.target.style.background = '#333';    
  }

  function dragEndHandler(e) {
    e.target.style.background = '#333';   
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = '#0ff';
  }

  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(cardList.map(c => {
      if (c.id === card.id) {
          return {...c, order: currentCard.order}
      }
      if (c.id === currentCard.id) {
          return {...c, order: card.order}        
      }
      return c
    }))
    e.target.style.background = '#333';
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1      
    } else {
      return -1
    }
  }

  return (
    <div className="app">
      {cardList.sort(sortCards).map(card => 
        <div 
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className={'card'}>
          <h3>{card.title}</h3>
          {card.text}
        </div>        
      )}
    </div>

  );
};

export default App;