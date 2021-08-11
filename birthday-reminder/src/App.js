import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data)
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('clear all')
  return (
    <div className="App">
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => clear(count, setPeople, setCount, setMessage)}>{message}</button>
      </section>
    </div>
  )
}

const clear = (count, setPeople, setCount, setMessage) => {
  if (count === 0) {
    setPeople([])
    setCount(1)
    setMessage('All')
  }
  if (count === 1) {
    setPeople(Data)
    setCount(0)
    setMessage('clear all')
  }
}

clear.propTypes = {
  count: PropTypes.number,
  setPeople: PropTypes.func,
  setCount: PropTypes.func,
  setMessage: PropTypes.func,
}

export default App;
