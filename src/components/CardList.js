import React from 'react'
import Card from './Card'

const CardList = ({friends}) => {
    const cardArray = friends.map((i,e) => {
        return <Card key={e} name={i.name} email={i.email} id={i.id}/>
    })
    return (        
        <div>{cardArray}</div>
    );
}
export default CardList;