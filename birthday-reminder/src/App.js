import React, { useState } from 'react'
import './App.css';
import Data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <div className="App">
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </div>
  )
}

export default App;
