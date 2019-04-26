import React from "react";

function Reservation(props) {
  return (
    <li>
      Rad {props.row + 1}, Sedadlo {props.seat + 1}{" "}
      <button onClick={() => props.clickHandler(props.row, props.seat)}>
        (Zrusit)
      </button>
    </li>
  );
}

export default Reservation;
