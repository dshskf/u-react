import React from 'react'
import { Link } from 'react-router-dom'
import './promo.scss'


class Promo extends React.Component {

    render() {
        return (
            <div className="promo">
                <div className="promo-img">
                    <img name="promoimg" src={require("../../Assets/Images/promo1.jpg")} alt="" />
                </div>
                <div className="move move-left" onClick="img_before()">
                    <Link>
                        <img src={require("../../Assets/Images/left.png")} />
                    </Link>
                </div>
                <div className="move move-right" onClick="img_after()">
                    <a>
                        <img src={require("../../Assets/Images/right.png")} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Promo