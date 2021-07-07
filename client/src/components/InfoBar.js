import './InfoBar.css'

import closeIcon from '../static/closeIcon.png'
import onlineIcon from '../static/onlineIcon.png'

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="symbol showing online" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="button to exit chat"/></a>
        </div>
    </div>
)
export default InfoBar