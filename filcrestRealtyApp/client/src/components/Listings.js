import React from 'react'
import '../App.css'
import { Listing } from './Listing/Listing'
export const Listings = () => {
  return (
    <div className='listings-container'>
        <h1>Find your next house</h1>
        
        <div className='listings'>
            <Listing/>
            <Listing/>
            <Listing/>
            <Listing/>
            <Listing/>
            <Listing/>
        </div>
    </div>
  )
}
