import React from "react";
import "./ScheduleBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ScheduleBtn = props => (
  <span className="schedule-btn" {...props}>
    Schedule your appointment today!
  </span>
);

export default ScheduleBtn;