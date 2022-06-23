import React from "react";
import Visual from "../Visual/Visual";
import Description from "../Description/Description";
import Author from "../Author/Author";
import "./card.css"

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <Visual />
                <Description />
                <Author />
            </div>
        );
    }
}

export default Card