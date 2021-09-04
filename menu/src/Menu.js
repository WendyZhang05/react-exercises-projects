import React from 'react';

const Menu = ({ categories, filterMenu }) => {
    return(
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button
                        type='button'
                        className='filter-btn'
                        key={index}
                        onClick={() => filterMenu(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Menu