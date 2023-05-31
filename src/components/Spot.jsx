import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

export function Spot({ image, country, googlemap, spotname, date, desc}) {
    return <div className="SpotContainer">
        <img src={image} />
        <div className="info" >
        <div className="location">
         <FontAwesomeIcon icon={faLocationDot} />
         <span>{country}</span>
         <a href={googlemap}>
         <span>View on Google Maps</span>
         </a>
        </div>
        <h1>{spotname}</h1>
        <h3>{date}</h3>
        <p>{desc}</p>
        </div>
    </div>
}

Spot.propTypes = {
    image: PropTypes.string,
    country: PropTypes.string,
    googlemap: PropTypes.string,
    spotname: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
}