import * as React      from 'react';
import * as ReactDOM   from 'react-dom';
import * as QRCode     from 'qrcode.react';

import Grid             from '@material-ui/core/Grid';
import Radio            from '@material-ui/core/Radio';
import RadioGroup       from '@material-ui/core/RadioGroup';
import Paper            from '@material-ui/core/Paper';
import TextField        from '@material-ui/core/TextField';
import FormLabel        from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                  <FormLabel>Level</FormLabel>
                  <RadioGroup
                      aria-label="level"
                      name="level"
                      value={this.state.level}
                      onChange={this.handleChange.bind(this)}
                  >
                      <FormControlLabel value="L" control={<Radio color="primary" />} label="L" />
                      <FormControlLabel value="M" control={<Radio color="primary" />} label="M" />
                      <FormControlLabel value="Q" control={<Radio color="primary" />} label="Q" />
                      <FormControlLabel value="H" control={<Radio color="primary" />} label="H" />
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
