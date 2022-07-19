import house from './Navbar/img/splash.jpg'
import '../App.css'
import Navbar from './Navbar/Navbar'
export const Landing = () => {
  return (
    <div className='landing'>
        <img src={house} style={{'position':'absolute', width:'100%',height:'850px', opacity: '50%'}} alt='house'></img>
        <div className='description'>
            <h1>Filcrest Realty</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
        </div>
    </div>
  )
}

export default Landing
