import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginUser from "./components/inputForm";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signup' component={LoginUser} />
      </Switch>
    </Router>
  );    
}

export default App;
