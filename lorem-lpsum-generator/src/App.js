import React, {useState} from 'react';
import text from './data'
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  const [paragraphs, setParagraphs] = useState([])
  //const paragraphs = text.filter((item, id) => id < number)
  const setNumberOfPara = e => {
    e.preventDefault()
    let amount = parseInt(number)
    console.log('e is', e)
    if (amount > text.length) {
      amount = text.length
    }
    if (amount < 1) {
      amount = 1
    }
    setParagraphs(text.slice(0,amount))
  }
  return (
    <main>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <form onSubmit={setNumberOfPara}>
        <label>Paragraphs: </label>
        <input type='number' id='para' name='para' value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button>Generate</button>
      </form>
      <article>
        {paragraphs.map((para, index) => {
          return (
            <p key={index}>{para}</p>
          )
        })}
      </article>
    </main>
  );
}

export default App;
