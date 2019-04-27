import React from "react";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: props.rows, cols: props.cols };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  // TODO move label+input outside as a separate universal component
  render() {
    return (
      <div className="settings">
        <div className="settings-input">
          <label htmlFor="rows">Rows</label>
          <input
            id="rows"
            name="rows"
            type="number"
            value={this.state.rows}
            onChange={this.handleChange}
          />
        </div>
        <div className="settings-input">
          <label htmlFor="cols">Seats</label>
          <input
            id="cols"
            name="cols"
            type="number"
            value={this.state.cols}
            onChange={this.handleChange}
          />
        </div>
        <div className="settings-input">
          <button
            onClick={() =>
              this.props.submitHandler(this.state.rows, this.state.cols)
            }
          >
            Set up!
          </button>
        </div>
      </div>
    );
  }
}

export default Settings;
