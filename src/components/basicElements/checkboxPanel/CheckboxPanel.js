import React from "react";
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

class checkboxPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.checkboxList
    };
  }

  render() {
    return <FormControl component="fieldset">
      <FormLabel component="legend">{this.props.title}</FormLabel>
      <FormGroup>
        {Object.keys(this.props.checkboxList).map((key) => (
          <FormControlLabel key={key}
            control={<Switch checked={this.props.checkboxList[key]} onChange={e => this.props.handleChange(key, e)} value={key} />}
            label={key}
          />
        ))}
      </FormGroup>
    </FormControl>
  }
}
export default checkboxPanel;
