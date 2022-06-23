import React from "react";
import Card from "../Card/Card";
import "./body.css"

class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <Card />
            </div>
        );
    }
}

export default Body