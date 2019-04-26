import React from "react";

function Reservation(props) {
  return (
    <li>
      Rad {props.row + 1}, Sedadlo {props.seat + 1}
    </li>
  );
}

export default Reservation;
