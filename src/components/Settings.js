import React from "react";
import "./Settings.css";
import settingsIcon from "../imgs/sliders-h-solid.svg";
import closeIcon from "../imgs/times-solid.svg";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: props.rows, cols: props.cols };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  renderSettingsForm() {
    return (
      <div className="settings settings-visible">
        <div className="settings-input">
          <button
            className="settings-toggle"
            onClick={this.props.toggleSettings}
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>
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

  renderSettingsButton() {
    return (
      <div className="settings">
        <button className="settings-toggle" onClick={this.props.toggleSettings}>
          <img src={settingsIcon} alt="" />
        </button>
      </div>
    );
  }

  // TODO move label+input outside as a separate universal component
  render() {
    if (this.props.show) return this.renderSettingsForm();
    else return this.renderSettingsButton();
  }
}

export default Settings;
