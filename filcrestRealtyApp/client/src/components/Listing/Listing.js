import './listingStyle.css'
import sample1 from './listingpics/sample.jpg'
import {FaBed} from 'react-icons/fa'
import {FaShower} from 'react-icons/fa'
import {MdGrid3X3} from 'react-icons/md'
import Gallery from './Gallery'

export const Listing = () => {
  return (
    <div className="listingBox">
        <div className='listing-img'>
            <Gallery/>
        </div>
        <h3>Ayala Alabang</h3>
        <div className='listing-details'>
            <p><FaBed/> 3</p>

            <p><FaShower/> 3</p>
            <p><MdGrid3X3/> 250</p>

        </div>
    </div>
  )
}
