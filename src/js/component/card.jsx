// Initializes React
import React from 'react';

// Defines Card component
const Card = (props) => {

    return (
        <div className="card" style={{width: '18rem'}}>
          <img src={props.imageUrl} alt={props.cardTitle} />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
          </div>
        </div>
    );
};

export default Card;
