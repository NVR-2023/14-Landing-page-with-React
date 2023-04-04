//Initialize React
import React from 'react';
//Jumbotron component
const Jumbotron = () => {
    return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-semibold">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ullam eius aliquam necessitatibus obcaecati molestias quibusdam.</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
            </div>
    );
};

export default Jumbotron;