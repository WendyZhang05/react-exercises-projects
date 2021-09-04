import React, {useState} from 'react'
import './App.css'
import data from './Data'
import MenuContent from './menuContent'
import Menu from './Menu'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

function App() {
  const [filteredData, setFilteredData] = useState(data)
  const filterMenu = (category) => {
    if (category === 'all') {
      setFilteredData(data)
      return
    }
    const updateMenu = data.filter((item) => item.category === category)
    setFilteredData(updateMenu)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Menu categories={allCategories} filterMenu={filterMenu} />
        <MenuContent data={filteredData} />
      </section>
    </main>
  );
}

export default App;
