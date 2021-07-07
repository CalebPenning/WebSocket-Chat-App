import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Login from "./components/Login"
import Chat from "./components/Chat"

const App = () => {
  return (
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/chat" exact component={Chat} />
  </Router>
  )
}

export default App;
