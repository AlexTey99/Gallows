import { FaHeartCrack } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";

const Header = () => {
    return(
        <div className="header">
            <FaHouseChimney className="FaHouseChimney"/>
            <h1>Pokemon</h1>
            <div className="life-bar"><FaHeartCrack className="FaHeartCrack"/></div>
        </div>
    )
}
export {Header};