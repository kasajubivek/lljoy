import React, { useState } from 'react'
import './card.css'

const Card = () => {

    const[cards] = useState([
        {
            title: 'Card-1',
            text: 'shdskjahdkjsahdjkashdjk'
        },
        {
            title: 'Card-2',
            text: 'shdskjahdkjsahdjkashdjk'
        },
        {
            title: 'Card-3',
            text: 'shdskjahdkjsahdjkashdjk'
        },
        {
            title: 'Card-4',
            text: 'shdskjahdkjsahdjkashdjk'
        },
        {
            title: 'Card-5',
            text: 'shdskjahdkjsahdjkashdjk'
        },
        {
            title: 'Card-6',
            text: 'shdskjahdkjsahdjkashdjk'
        },

    ])

  return (
    <div>
        <section>
            <div className="cardContainer">
                <h1>Practise Areas</h1>
                <div className="cards">
                    {
                        cards.map((card,i) => (
                            <div key={i} className="card">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </section>
    </div>
  )
}

export default Card