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
                    path='https://www.google.com/maps/place/Colored+Canyon/@29.1470663,34.5898989,15z/data=!4m2!3m1!1s0x0:0xca9ebb77c44d1fa6?sa=X&ved=2ahUKEwiq_8-IicL6AhUVahoKHTo2AsEQ_BJ6BQiDARAF'
                    />
                </ul>
                <ul className='cards__items'>
                    
                    <CardItem
                    src="images/Djara-Cave.jpg"
                    text="Explore El-Dakhla Oasis hidden Gem Djara Cave"
                    label="Adventure"
                    path='https://www.google.com/maps/place/Djara+Cave+%D9%83%D9%87%D9%81+%D8%A7%D9%84%DA%86%D8%A7%D8%B1%D8%A9%E2%80%AD/@27.4031946,29.6373796,15z/data=!4m2!3m1!1s0x0:0x76e1f3bd1014524b?sa=X&ved=2ahUKEwi6msu7iML6AhUOWBoKHZbNBC4Q_BJ6BAhyEAU'
                    />
                    <CardItem
                    src="images/Shali-Fortress.jpg"
                    text="Enjoy the spectacular organic shapes of the remains of this 13th-century mud-brick fortress in Old Siwa"
                    label="Landskaping"
                    path='https://www.google.com/maps/place/Shali+Fortress/@29.2025623,25.5164925,15z/data=!4m2!3m1!1s0x0:0xf2bedc127a0c9fcb?sa=X&ved=2ahUKEwjHvYDwiML6AhVG9IUKHfzuB1UQ_BJ6BAh9EAU'
                    />
                    <CardItem
                    src="images/Wadi-El-Weshwash.jpg"
                    text="Enjoy the water like never before in Wadi El-Weshwash in Nuweina"
                    label="Unique experience"
                    path='https://www.google.com/maps/place/Wadi+El+Weshwash+-+%D9%88%D8%A7%D8%AF%D9%8A+%D8%A7%D9%84%D9%88%D8%B4%D9%88%D8%A7%D8%B4%E2%80%AD/@29.162142,34.6451423,15z/data=!4m2!3m1!1s0x0:0xb5663ee24a571ce6?sa=X&ved=2ahUKEwjh5peficL6AhVM4oUKHdpHBckQ_BJ6BAhmEAU'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards