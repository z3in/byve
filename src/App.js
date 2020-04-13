import React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SignUp from './components/Header/Forms/SignUp'
import Init from './pages/Init'
import User from './pages/User'


import { Test } from './test'

const App = () => {
  return (
    <>
    <Header>
    </Header>
    <Main>
        <Switch>
          <Redirect exact strict from="/" to="/products" component={Init}/>
          <Route exact strict path="/products" component={Init} />
          <Route exact strict path="/signup" component={SignUp}/>
          
          <Route path="/User" component={User}/>

          <Route path="/test" component={Test}/>
          <Route >
            <div className="container"><h1>Page Not found</h1></div>
          </Route>
        </Switch>
    </Main>
    </>
  )
}

export default App;
