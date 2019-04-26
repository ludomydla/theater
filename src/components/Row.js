import React from "react";
import Seat from "./Seat";

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.seats.map((seat, index) => (
          <Seat
            key={index}
            clickHandler={this.props.clickHandler}
            checked={seat === 0 ? "" : "checked"}
          />
        ))}
      </div>
    );
  }
}

export default Row;
