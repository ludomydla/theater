import React from "react";
import Seat from "./Seat";
import Reservation from "./Reservation";
import "./Theater.css";

class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: Array(props.rows).fill(Array(props.cols).fill(false)),
      reservations: []
    };
  }

  clickHandler(row, seat) {
    // 2D array deep copy
    let seatsCopy = this.state.seats.map(arr => [...arr]);
    const reservationsCopy = [...this.state.reservations];
    seatsCopy[row][seat] = !seatsCopy[row][seat];
    if (seatsCopy[row][seat]) {
      reservationsCopy.push({ row, seat });
    }
    //console.log("res:", reservationsCopy);
    this.setState({ seats: seatsCopy, reservations: reservationsCopy });
  }

  /**
   * Used to count number of checked seats based on "seats" 2D array
   */
  getCount() {
    return this.state.seats.reduce(
      (acc, row) => acc + row.reduce((a, seat) => a + seat, 0),
      0
    );
  }

  render() {
    const allSeats = [];
    for (let row = 0; row < this.state.seats.length; row++) {
      let rowSeats = [];
      for (let seat = 0; seat < this.state.seats[row].length; seat++) {
        rowSeats.push(
          <Seat
            key={seat}
            row={row}
            seat={seat}
            clickHandler={this.clickHandler.bind(this)}
            checked={this.state.seats[row][seat] ? "checked" : ""}
          />
        );
      }
      allSeats.push(
        <div className="row" key={row}>
          {rowSeats}
        </div>
      );
    }
    const reservationsList = this.state.reservations.map((res, index) => (
      <Reservation row={res.row} seat={res.seat} />
    ));

    return (
      <div className="panel">
        <div className="theater">{allSeats}</div>
        <div className="reservations">
          Vybrane miesta:
          {reservationsList}
        </div>
        <div className="count">Pocet {this.getCount()}</div>
      </div>
    );
  }
}

export default Theater;
