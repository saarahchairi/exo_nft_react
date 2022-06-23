import React from "react";
import Img from "../images/icon-ethereum.svg";
import Img2 from "../images/icon-clock.svg"
import "./description.css"

class Description extends React.Component{
    render(){
        return(
            <div className="description">
                <h2>Equilibrium #3429</h2>
                <p className="para">Our Equilibrium collection promotes balance and calm.</p>
                <div className="info">
                    <p className="value"><img src={Img} alt="" /> 0.041ETH</p>
                    <p className="time"><img src={Img2} alt="" /> 3 days left</p>
                </div>
            </div>
        );
    }
}

export default Description