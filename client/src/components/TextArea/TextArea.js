import React from "react";
import "./TextArea.css";

const TextArea = props => (
    <div className="form-group">
        <textarea className="form-control" rows="20" {...props} />
        <h4>
            You don't have time to waste at a carwash or the supplies to do it yourself ? Let our Finesse Detail specialist make your car look like new. Our tech's uses only the highest quality products to take care of your car.
        </h4>
        <br/>    
        <h4>
            Stuck at Work or Home? We now Offer Valet Detail Service! 
        </h4>
        <br/>  
        <h4>
            We can pick up your Vehicle and bring to one our Service Locations
        </h4>
        <br/>    
  </div>
);

export default TextArea;