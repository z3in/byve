import React from 'react';
import { Switch,Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SignUp from './components/Header/Forms/SignUp'

const App = () => {
  return (
    <>
    <Header>

    </Header>
    <Main>
        <Switch>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
    </Main>
    </>
  )
}

export default App;
