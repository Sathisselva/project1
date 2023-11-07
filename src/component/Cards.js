import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>check out the epic destinaton</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
             src='/image/img-2.jpeg'
             text='the beauty of the art lies in the thoughts of the artist'
             label='advature'
             path='/services'
             />
              <CardItem
             src='/image/img-3.jpeg'
             text='the beauty of the art lies in the thoughts of the artist'
             label='advature'
             path='/services'
             />
          </ul>
          <ul className='cards__items'>
          <CardItem
             src='/image/img-4.jpeg'
             text='the beauty of the art lies in the thoughts of the artist'
             label='advature'
             path='/services'
             />
              <CardItem
             src='/image/img-5.jpeg'
             text='the beauty of the art lies in the thoughts of the artist'
             label='advature'
             path='/services'
             />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards