import React from 'react';

const List = ({people}) => {
    return (
        <ul>
            {people.map((item) => {
                const { id, name, age, image } = item
                return (
                    <li key={id} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;