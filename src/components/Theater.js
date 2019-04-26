import React from "react";
import Seat from "./Seat";

class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: Array(props.rows).fill(Array(props.cols).fill(false))
    };
  }

  clickHandler(row, seat) {
    //console.log("Clicked", row, seat);
    let seatsCopy = this.state.seats.map(arr => [...arr]);
    seatsCopy[row][seat] = !seatsCopy[row][seat];
    this.setState({ seats: seatsCopy });
  }

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

    return (
      <div className="theater">
        {allSeats}
        <div className="count">Pocet {this.getCount()}</div>
      </div>
    );
  }
}

export default Theater;
