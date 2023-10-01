import React from 'react';
import CardItem from './CardItem'
import "./Cards.css";


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path='/services'
                    />
                    <CardItem
                    src="images/Colored-Canyon.jpg"
                    text="Feel the nature and see what's beyond beauty of Nuweiba in the Color Canyon"
                    label="Nature"
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    
                    <CardItem
                    src="images/djara-cave.jpg"
                    text="Explore El-Dakhla Oasis hidden Gem Djara Cave"
                    label="Adventure"
                    path='/services'
                    />
                    <CardItem
                    src="images/Shali-Fortress.jpg"
                    text="Enjoy the spectacular organic shapes of the remains of this 13th-century mud-brick fortress in Old Siwa"
                    label="Landskaping"
                    path='/services'
                    />
                    <CardItem
                    src="images/Wadi-El-Weshwash.jpg"
                    text="Enjoy the water like never before in Wadi El-Weshwash in Nuweina"
                    label="Unique experience"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards