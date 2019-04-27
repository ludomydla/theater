import React from "react";
import Theater from "./components/Theater";
import Settings from "./components/Settings";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 10, cols: 20, showSettings: false };
    this.setNewDimensions = this.setNewDimensions.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  setNewDimensions(newRows, newCols) {
    this.setState({ rows: +newRows, cols: +newCols, showSettings: false });
  }

  toggleSettings() {
    this.setState({ showSettings: !this.state.showSettings });
  }

  render() {
    return (
      <div className="app">
        <Theater rows={this.state.rows} cols={this.state.cols} />
        <Settings
          rows={this.state.rows}
          cols={this.state.cols}
          submitHandler={this.setNewDimensions}
          show={this.state.showSettings}
          toggleSettings={this.toggleSettings}
        />
      </div>
    );
  }
}

export default App;
