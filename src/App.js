import React from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #ff6b8b, #ff8e53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '5px 30px'
  }
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36
    }
  },
  palette: {
    primary: {
      main: green[400]
    },
    secondary: {
      main: orange[400]
    }
  }
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={e => setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="body1">Learn how to use Material UI</Typography>
          <ButtonStyled />
          <TextField variant="outlined" color="secondary" type="date" />
          <TextField
            variant="filled"
            color="secondary"
            type="time"
            label="Time"
          />
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="Mail"
            placeholder="test@test.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary">
            <Button startIcon={<SaveIcon />} size="large">
              Save
            </Button>{' '}
            <Button startIcon={<DeleteIcon />} size="large" color="secondary">
              Discard
            </Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
