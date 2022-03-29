import Quotes from './quotes.json'
import Button from './components/Button';
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';
import './App.css';

function App() {

  
  let index = Math.floor(Math.random()*102);
  const [color, setColor] = useState('yellow');
  const [quote, setQuote] = useState(Quotes.quotes[index]);


  function HandleColor(){
    let color = Math.floor(Math.random()*5);
    if(color === 0){
      setColor('green');
    } else if(color === 1) {
      setColor('red');
    } else if(color === 2) {
      setColor('blue');
    } else if(color === 3) {
      setColor('orange');
    } else if(color === 4) {
      setColor('yellow');
    }
  }
  function HandleIndex(){
    index = Math.floor(Math.random()*102);
    setQuote(Quotes.quotes[index]);
    HandleColor();
  }

  return (
    <div className="App">
      <div className={'bg ' + color}>
        <div className="container">
          <div className="card">
            <div className='circle'><Button handle={HandleIndex} color={color} quote={quote.quote}/></div>
            <QuoteBox quote={quote}/>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
