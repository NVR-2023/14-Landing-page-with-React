import React from "react";


const Card = (props) => {
    
return(
    <div className="card text-center" style={{ width: "18rem"}} >
        <img src={props.imageUrl} className="card-img-top " style={{height: "11rem"}}  alt={props.cardTitle}/>
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
        </div>
        <div className="card-footer">
            <a href={props.buttonURL} className="btn btn-primary border">{props.buttonLabel}</a>
        </div>
    </div>
)};

export default Card;