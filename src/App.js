import React from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
