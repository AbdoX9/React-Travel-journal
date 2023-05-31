
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons"

export function Header() {
    return <div className="HeaderContainer">
        <FontAwesomeIcon icon={faEarthAmericas} />
        <span>my travel journal.</span>
    </div>
}