import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import'./index.css'
import Support from './components/Support'
import Login from './components/Login'
import Topics from './components/Topics';
function App() {

  return (
<>
<Topics />
<Support />
<Login />
</>
  )
}

export default App
