import * as React      from 'react';
import * as ReactDOM   from 'react-dom';
import * as QRCode     from 'qrcode.react';

import Grid                  from 'material-ui/Grid';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper                 from 'material-ui/Paper';
import TextField             from 'material-ui/TextField';
import { FormLabel, FormControlLabel } from 'material-ui/Form';

type Level = 'L' | 'M' | 'Q' | 'H'

// Typed Props
interface Props {
}

// Typed State
interface State {
  qrValue: string;
  level  : Level;
}

class App extends React.Component<Props, State> {
  constructor(props){
    super(props);
    this.state = {
        qrValue: "",
        level  : 'L',
    }
  }

  handleChange(event, value: Level){
    this.setState({level: value});
  }

  render () {
    return (
      <div>
          <Grid container direction={'row'}>
              <Grid item md={2}>
                  <FormLabel component="legend">Level</FormLabel>
                  <RadioGroup
                      aria-label="level"
                      name="level"
                      value={this.state.level}
                      onChange={this.handleChange.bind(this)}
                  >
                      <FormControlLabel value="L" control={<Radio />} label="L" />
                      <FormControlLabel value="M" control={<Radio />} label="M" />
                      <FormControlLabel value="Q" control={<Radio />} label="Q" />
                      <FormControlLabel value="H" control={<Radio />} label="H" />
                  </RadioGroup>
              </Grid>
              <Grid item md={3}>
                  <TextField
                      multiline={true}
                      label="Input text"
                      rows={10}
                      onChange={e => this.setState({qrValue: e.target.value})}
                  />
              </Grid>
              <Grid item>
                  <Paper style={{padding: 15}}>
                    <QRCode value={this.state.qrValue} level={this.state.level} />
                  </Paper>
              </Grid>
          </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
