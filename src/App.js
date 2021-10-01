import './scss/style.scss'
import './components/Header'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header/> 
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
