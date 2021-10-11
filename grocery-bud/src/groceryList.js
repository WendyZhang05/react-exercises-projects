import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const GroceryLists = ({ lists, editItem, deleteItem }) => {
    return (
        <div className='grocery-list'>
            {lists.map(({ name, id }) => 
                <ul>
                    <li className='grocery-item' id={id} >
                        <p className='title'>{name}</p>
                        <div>
                            <button type='button' className='edit-btn' onClick={() => editItem(id)}><FaEdit /></button>
                            <button type='button' className='delete-btn' onClick={() => deleteItem(id)}><FaTrash /></button>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default GroceryLists
