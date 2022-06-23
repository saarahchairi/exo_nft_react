import React from "react";
import Img from "../images/image-avatar.png"
import "./author.css"


class Author extends React.Component{
    render(){
        return(
            <div className="author">
                <img src={Img} alt="" />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        );
    }
}

export default Author