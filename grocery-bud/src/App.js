import React, { useState } from 'react';
import './App.css';
import GroceryLists from './groceryList';
import Alert from './Alert';

const alertContent = {
  addSuccess: { type: 'success', msg: 'item has been added successfully'},
  editSuccess: { type: 'success', msg: 'item has been updated successfully'},
  deleteSuccess: { type: 'danger', msg: 'item has been deletes successfully'},
  blankValueWarning: {type: 'danger', msg: 'please enter a value'},
  noAlert: {}
}

function App() {
  const [lists, setLists] = useState([])
  const [editing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [editId, setEditId] = useState('')
  const [alertType, setAlertType] = useState('noAlert')
  const [alertShow, setAlertShow] = useState(false)

  const removeAlert = () => {
      setAlertShow(false)
      setAlertType('noAlert')
  }

  const editItem = (id) => {
    setEditing(true)
    setEditId(id)
    for (const item of lists) {
      if (item.id === id) {
        setInputValue(item.name)
        break
      }
    }
  }
  const deleteItem = (id) => {
    const updatedLists = lists.filter(item => item.id !== id)
    setLists(updatedLists)
    setAlertShow(true)
    setAlertType('deleteSuccess')
  }
  const cleanItems = () => {
    setLists([])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) {
      setAlertShow(true)
      setAlertType('blankValueWarning')
    }
    if (editId) {
      setLists(lists.map(item => {
        if (item.id === editId) {
          return { ...item, name: inputValue}
        }
        return item
      }))
      setAlertShow(true)
      setAlertType('editSuccess')
    }
    else {
      const newItem = { name: inputValue, id: new Date().getTime().toString()}
      setLists([...lists, newItem])
      setAlertShow(true)
      setAlertType('addSuccess')
    }
    setEditing(false)
    setInputValue('')
    setEditId('')
  }
  const currentAlert = alertContent[alertType]
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit} >
        {alertShow && <Alert alert={currentAlert} removeAlert={removeAlert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            type='text'
            name = 'item'
            placeholder = 'e.g. eggs'
            value = {inputValue}
            onChange = {(e) => setInputValue(e.target.value)}
          />
          <button className='submit-btn' type='submit' >{editing ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      {lists.length > 0 && 
        <div className='grocery-container'>
          <GroceryLists lists={lists} editItem={editItem} deleteItem={deleteItem}/>
          <button className='clear-btn' onClick={() => cleanItems()}>Clear Items</button>
        </div>
      }
    </section>
  );
}

export default App;
