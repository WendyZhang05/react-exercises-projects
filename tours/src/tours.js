import React from 'react'
import Tour from './tour'
import PropTypes from 'prop-types'

const Tours = ({ tours, removeTour} ) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour tour={tour} removeTour={removeTour} />
                })}
            </div>
        </section>
    )
}

Tours.propTypes = {
    tour: PropTypes.object,
    removeTour: PropTypes.func,
}

export default Tours