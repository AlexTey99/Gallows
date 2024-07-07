import { FaHeartCrack } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
    const anchoDivBarra = useSelector(state => state.counter.ancho);
    

    return(
        <div className="header">
            <FaHouseChimney className="FaHouseChimney"/>
            <h1>Pokemon</h1>
            <div className="life-bar">
                <FaHeartCrack className="FaHeartCrack"/>
                <div id="resizableDiv" className="resizableDiv" style={{ width: `${anchoDivBarra}px` }}></div>
            </div>
        </div>
    )
}
export {Header};