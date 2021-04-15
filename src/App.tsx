import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Home } from '@material-ui/icons';
import useHomeStyles from './components/styles';

function App() {

  const classes = useHomeStyles();
  return (
   <>


      <div className={classes.homePage}> <HomePage /> </div>

  </>
    
   
  );
}

export default App;
