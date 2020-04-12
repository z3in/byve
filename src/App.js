import React from 'react';
import { Switch,Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SignUp from './components/Header/Forms/SignUp'
import Init from './pages/Init'

const App = () => {
  return (
    <>
    <Header>
    </Header>
    <Main>
        <Switch>
          <Route exact path="/" component={Init} />
          <Route path="/signup" component={SignUp}/>
        </Switch>
    </Main>
    </>
  )
}

export default App;
