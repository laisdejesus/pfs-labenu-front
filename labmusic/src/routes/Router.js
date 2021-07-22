import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'
import SignUpPage from '../pages/SignUp/SignUpPage'
import FeedPage from '../pages/Feed/FeedPage'
import MusicDetailPage from '../pages/MusicDetail/MusicDetailPage'
import ErrorPage from '../pages/Error/ErroPage'



const Router = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage/>
        </Route>
        <Route exact path={"/signup"} >
          <SignUpPage/>
        </Route>
        <Route exact path={"/music/all"}>
          <FeedPage />
        </Route>
        <Route exact path={"/music/:id"}>
          <MusicDetailPage />
        </Route>
        <Route >
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;