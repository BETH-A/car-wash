import React from "react";

const Jumbotron = ({ children }) => (
    <div className="jumbotron jumbotron-fluid bg-dark">
        <div className="container">
          <h1 className="display-4">FINESSE CARWASH SERVICE & DETAIL</h1>
            <hr color="red" />
          <h4 className="lead">Your one stop source for your mobile carwash service.</h4>
        </div>
        {children}
  </div>
);

export default Jumbotron;