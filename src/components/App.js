import React from 'react';
import './App.scss';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Main from "./pages/Main";
import CoinbaseReport from "./pages/CoinbaseReport";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState(() => ({
      value: newValue
    }));
  }

  render() {
    return (
        <div className="App">
          <AppBar position="static" className="App-header">
            <Tabs value={this.state.value} onChange={this.handleChange}>
              <Tab label="Main" />
              <Tab label="Reports" />
            </Tabs>
          </AppBar>
          {this.state.value === 0 && <Main />}
          {this.state.value === 1 && <CoinbaseReport />}
        </div>
    )
  };

}

export default App;
