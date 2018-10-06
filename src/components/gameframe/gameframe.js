import React from "react";
import { Col, CardPanel, Card, CardImg, MediaBox, CardTitle } from 'react-materialize';
import "./gameframe.css";


const Gameframe = props => {
        return <div className="col-3" id="comp"><Card><CardTitle image={props.icon}/></Card></div>
        // <MediaBox src={props.icon} caption="A demo media box1" width="250" height="250"/>
    //     <Col s={12} m={4} l={3}>
    //         <CardPanel onClick={() => props.clickHandler(props.icon.iconName)} className={"hoverable teal lighten-4 black-text center" + (props.correct === false ? " shake" : "")}>
    //         <CardImg src={props.icon}/>
    //     </CardPanel>
    // </Col>


};
export default Gameframe;