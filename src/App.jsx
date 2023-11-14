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

  return (
    <div className="app">
      {cardList.map(card => 
        <div className={'card'}>
          <h3>{card.title}</h3>
          {card.text}
        </div>        
      )}
    </div>

  );
};

export default App;