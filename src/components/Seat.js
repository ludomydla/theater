import React from "react";

function Seat(props) {
  return (
    <input
      type="checkbox"
      row={props.row}
      seat={props.seat}
      onChange={() => props.clickHandler(props.row, props.seat)}
      checked={props.checked}
    />
  );
}

export default Seat;
