import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

import './style.css';

function App() {
  
  return (
    <>
      <div className="exemplo">

        <h1 style={{fontFamily:'Roboto', fontWeight: '300', fontSize: '1.6rem'}}>Sign in</h1>

        <TextField id="outlined-basic" label="Name" variant="outlined" className="name"/>

        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="password"
          sx={{ marginTop: '1.5rem'}}
        />          

        <Button variant="contained" className="signIn" sx={{marginTop: '1.5rem', width: '30%'}}>
          SIGN IN
        </Button>
      </div>
    </>
  );
}

export default App;
