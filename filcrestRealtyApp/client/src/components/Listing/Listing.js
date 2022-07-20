import './listingStyle.css'
import {FaBed} from 'react-icons/fa'
import {FaShower} from 'react-icons/fa'
import {MdGrid3X3} from 'react-icons/md'
import Gallery from './Gallery'

export const Listing = ( {property}) => {
  return (
    <div className="listingBox">
        <div className='listing-img'>
            <Gallery/>
        </div>

        <div className='listing-desc'>
          <h3>{property.title}</h3>
          <p>{property.listingType}</p>
          <p>{property.price}</p>
        </div>

        <div className='listing-details'>
            <p><FaBed/> {property.br}</p>
            <p><FaShower/> {property.cr}</p>
            <p><MdGrid3X3/> {property.fa}</p>
        </div>

    </div>
  )
}
