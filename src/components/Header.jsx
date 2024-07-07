import { FaHeartCrack } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

const Header = () => {
    const barDivwidth = useSelector(state => state.counter.width);
    console.log(barDivwidth);
    

    return(
        <div className="header">
            <FaHouseChimney className="FaHouseChimney"/>
            <h1>Pokemon</h1>
            <div className="life-bar">
                <div id="resizableDiv" className="resizableDiv" style={{ width: `${barDivwidth}px` }}></div>
            </div>
            <div className="containerHearts">
                <FaHeartCrack className={`FaHeartCrack ${barDivwidth === 0 ? 'displayFlex' : 'displayNone'}`}/>
                <FaHeart className={`FaHeart ${barDivwidth === 0 ? 'displayNone' : 'displayFlex'}`}/>
            </div>
        </div>
    )
}
export {Header};