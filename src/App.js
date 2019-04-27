import React from "react";
import Theater from "./components/Theater";
import Settings from "./components/Settings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 10, cols: 20 };
    this.setNewDimensions = this.setNewDimensions.bind(this);
  }

  setNewDimensions(newRows, newCols) {
    this.setState({ rows: +newRows, cols: +newCols });
  }

  render() {
    return (
      <div>
        <Theater rows={this.state.rows} cols={this.state.cols} />
        <Settings
          rows={this.state.rows}
          cols={this.state.cols}
          submitHandler={this.setNewDimensions}
        />
      </div>
    );
  }
}

export default App;
