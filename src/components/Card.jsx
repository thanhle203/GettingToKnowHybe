/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={props.image} />
            <h3>{props.name}</h3>
            <h4>{props.group}</h4>
            <a href={props.link}>
                <button>
                    Learn More
                </button>
            </a>
        </div>
    )
}

export default Card;