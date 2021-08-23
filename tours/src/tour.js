import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Tour = ({ tour, removeTour }) => {
    const { id, name, info, price, image } = tour
    const [fullInfo, setFullInfo] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {fullInfo ? info : `${info.substring(0,200)} ...`}
                    <button onClick={() => setFullInfo(!fullInfo)}>
                        {fullInfo ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </footer>
        </article>
    )
}

Tour.propTypes = {
    tour: PropTypes.object,
    removeTour: PropTypes.func,
}

export default Tour