import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="htttp://google.com" rel="noopener noreferrer" target="_blank">
<img src={logo} width="30" height="30" alt="logo" />
</a> 
<Link to="/" className="navbar-brand"> MERN Stack To do App </Link>
<div className="collapse navbar-collapse"> 
<ul className="navbar-nav mr-auto"> 
        <li className="navbar-item"> 
            <Link to="/" className="nav-link"> Todos </Link>
        </li>
        <li className="navbar-item"> 
            <Link to="/create" className="nav-link"> Create Todo </Link>
        </li>
</ul>
</div>
</nav>

      <Route exact path="/" component={TodoList} />
      <Route exact path="/edit/:id" component={EditTodo} />
      <Route exact path="/create" component={CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;
