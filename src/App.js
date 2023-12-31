import React, { useEffect,useContext } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import {AuthContext, FirebaseContext} from './store/Context'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Create from './Pages/Create';


function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        
      </Router>
      <Router>
        <Route path='/signup'>
        <Signup/>
        </Route>
        <Route path='/login'>
        <Login/>
        </Route>
        <Route path='/create'>
        <Create/>
        </Route>
        
        
      </Router>
      
    </div>
  );
}

export default App;
