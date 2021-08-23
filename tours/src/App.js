import React from 'react'
import { useState, useEffect } from 'react'
import Tours from './tours'
import Loading from './loading'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const toursFetch = () => {
    setLoading(true)
    fetch(url)
    .then((res) => res.json())
    .then((tours) => {
      setTours(tours)
      setLoading(false)
    })
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    toursFetch()
  }, [])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length===0) {
    return (
      <main>
        <button className="btn" onClick={() => toursFetch()} >
          Load All
        </button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
