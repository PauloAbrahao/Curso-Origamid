import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import './style.css';

function App() {
  
  return (
    <>
      <div className="exemplo">

        <h1 style={{fontFamily:'Roboto', fontWeight: '400', fontSize: '1.5rem'}}>Sign in</h1>

        <TextField id="outlined-basic" label="Name" variant="outlined" className="name"/>

        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="password"
          sx={{ marginTop: '1.5rem'}}
        />          

        <div className="checkbox">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </div>

        <Button variant="contained" className="signIn" sx={{marginTop: '1.2rem', width: '30%'}}>
          SIGN IN
        </Button>

        <div className="forgotCreate">
          <a> Forgot password? </a>
          <a> Don't have an account? Sign Up </a>
        </div>

      </div>
    </>
  );
}

export default App;
