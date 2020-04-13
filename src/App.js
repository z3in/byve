import React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SignUp from './components/Header/Forms/SignUp'
import Init from './pages/Init'
import { Test } from './test'

const App = () => {
  return (
    <>
    <Header>
    </Header>
    <Main>
        <Switch>
          <Redirect exact from="/" to="/products" component={Init}/>
          <Route path="/products" component={Init} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/test" component={Test}/>
        </Switch>
    </Main>
    </>
  )
}

export default App;
