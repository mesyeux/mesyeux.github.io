import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem 
                  src='images/shoot1.jpg'
                  text='MyTheresa Lookbook'
                  label='lookbook'
                  path='/idk'
              />
              <CardItem 
                  src='images/shoot2.jpg'
                  text='Holzweiler'
                  label='lookbook'
                  path='/idk'
              />
            <CardItem 
              src='images/shoot3.jpg'
              text='One Magazine'
              label='lookbook'
              path='/idk'
            />
            <CardItem 
              src='images/shoot4.jpg'
              text='UWU'
              label='lookbook'
              path='/idk'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
