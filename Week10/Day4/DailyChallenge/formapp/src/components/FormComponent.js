import React from "react";

const FormCompomnent = (props) => {
    // console.log("props=>", props.info)
    console.log("props.info.fname=> ", props.info.fname)
    return (
            <div className="entered-info">
                <h2>Entered information: </h2>
                <p>Your first name: {props.info.fname}</p>
                <p>Your last name: {props.info.lname}</p>
                <p>Your age: {props.info.age}</p>
                <p>Your gender: {props.info.gender}</p>
                <p>Your dietary restrictions:</p>
                <div className="restrictions">
                    <span>**Nuts free :  {props.info.nuts ? "Yes" : "No"} </span> <br/>
                    <span>**Lactose free : {props.info.lactose ? "Yes" : "No"} </span> <br/>
                    <span>**Vegan meal :  {props.info.vegan ? "Yes" : "No"} </span>
                </div>
                <p>Your destination: {props.info.destination}</p>
            </div>
    
    )
}
export default FormCompomnent


    
