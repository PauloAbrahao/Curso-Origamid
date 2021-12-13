import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './style.css';

function App() {
  
  return (
    <div className="exemplo">
      <TextField id="outlined-basic" label="Nome" variant="outlined" className="nome"/>

      <TextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>
    </div>
  );
}

export default App;
