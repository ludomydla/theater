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

  checkSeat(row, seat) {
    // 2D array deep copy
    let seatsCopy = this.state.seats.map(arr => [...arr]);
    const reservationsCopy = [...this.state.reservations];
    seatsCopy[row][seat] = !seatsCopy[row][seat];
    if (seatsCopy[row][seat]) {
      reservationsCopy.push({ row, seat });
    }
    reservationsCopy.sort(
      (a, b) =>
        // Used 1000 to make sure, the row value has higher "priority"
        // Can use also length of row array
        a.row * 1000 + a.seat - (b.row * 1000 + b.seat)
    );
    this.setState({ seats: seatsCopy, reservations: reservationsCopy });
  }

  removeSeat(row, seat) {
    // 2D array deep copy
    let seatsCopy = this.state.seats.map(arr => [...arr]);
    const reservationsCopy = [...this.state.reservations];
    const myReservationIndex = reservationsCopy.findIndex(function(
      reservation
    ) {
      return reservation.row === row && reservation.seat === seat;
    });
    seatsCopy[row][seat] = false;

    reservationsCopy.splice(myReservationIndex, 1);
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

  renderSeat(rowIndex, seatIndex) {
    if (rowIndex < 0) {
      if (seatIndex < 0) {
        // 1️⃣ Top left corner - empty span
        return <span key={seatIndex} />;
      } else {
        // 2️⃣ Top row with seat number
        return <span key={seatIndex}>{seatIndex + 1}</span>;
      }
    } else {
      if (seatIndex < 0) {
        // 3️⃣ First element of row - row label
        return <span key={seatIndex}>Rad{rowIndex + 1}</span>;
      } else {
        // 4️⃣ Finally render Seat component
        return (
          <Seat
            key={seatIndex}
            row={rowIndex}
            seat={seatIndex}
            clickHandler={this.checkSeat.bind(this)}
            checked={this.state.seats[rowIndex][seatIndex] ? "checked" : ""}
          />
        );
      }
    }
  }

  renderRow(rowIndex) {
    let rowSeats = [];
    for (let seat = -1; seat < this.state.seats[0].length; seat++) {
      rowSeats.push(this.renderSeat(rowIndex, seat));
    }
    return rowSeats;
  }

  render() {
    const allSeats = [];
    for (let row = -1; row < this.state.seats.length; row++) {
      allSeats.push(
        //<div className="row" key={row}>
        this.renderRow(row)
        //</div>
      );
    }
    const reservationsList = this.state.reservations.map((res, index) => (
      <Reservation
        row={res.row}
        seat={res.seat}
        key={index}
        clickHandler={this.removeSeat.bind(this)}
      />
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
