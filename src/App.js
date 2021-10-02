import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginUser from "./components/inputForm/inputForm";
import Success from './components/success/success';
import Failure from './components/failure/failure';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LoginUser} exact/>
        <Route path='/success' component={Success} />
        <Route path='/failure' component={Failure} />
      </Switch>
      <Footer />
    </Router>
  );    
}

export default App;
