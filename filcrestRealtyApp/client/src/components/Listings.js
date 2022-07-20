import React from 'react'
import '../App.css'
import { Filter } from './Filter'
import { Listing } from './Listing/Listing'

import { properties } from './dummyListings'

export const Listings = () => {
  return (
    <div className='listings-container'>
        <h1 style={{'margin':'20px'}}>Find your next home</h1>
        <Filter/>
        <div className='listings'>
            {properties.map((curr) => {
              return(
                <Listing property = {curr}/>
              )
            })}
        </div>
    </div>
  )
}
