import Logo from "./Logo";
import './navStyles.css'
import { menuItems } from "./MenuItems";
export const Navbar = () => {
  return (
    <div className="navbar">
        <Logo/>
        <ul className="nav-menu">
            {menuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
                
            })}
            
        </ul>
    </div>
  )
}
export default Navbar