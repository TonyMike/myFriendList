import React from 'react'

const Card = ({name,email,id}) => {
    return (
        <div className='dib bg-light-green br3 ma2 tc pa3 grow shadow-3'>
            <img src={`https://robohash.org/${id}`} alt='friend'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card