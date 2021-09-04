import React from 'react'
import Item from './contentItem'

const MenuContent = ({ data }) => {
    return (
        <div className='section-center'>
            {data.map(item => <Item item={item} />)}
        </div>
    )
}

export default MenuContent;