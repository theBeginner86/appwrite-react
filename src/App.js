import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InputForm from "./components/inputForm/inputForm";
import Success from './components/success/success';
import Failure from './components/failure/failure';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={InputForm} exact/>
        <Route path='/success' component={Success} />
        <Route path='/failure' component={Failure} />
      </Switch>
    </Router>
  );    
}

export default App;
