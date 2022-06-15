import "../sass/nav.scss"
import { FaBed, FaCarSide, FaTaxi, FaPlane } from 'react-icons/fa'
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";
const Navbar = () => {
    return <nav>
        <h2 className="icon"><Link to="/">Booking Agency</Link></h2>
        <ul className="nav-links">
            <li> <FaBed />Stays</li>
            <li> <FaPlane />Flights</li>
            <li> <FaCarSide />Cars Rent</li>
            <li><FaTaxi />Airport Taxis</li>
        </ul>
        <div className="textWrapper">
            <h2>
                Best Offers In The Market ? a Lifte Time Of Discounts.
            </h2>
            <h4>
                Get Rewarded For Your Travels - unlock instant savings of 10% or more with Regestration
            </h4>
            <button>Sign In/Regester</button>
        </div>
        <SearchBar />
    </nav>
}
export default Navbar;