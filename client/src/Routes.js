import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import blog from './pages/Blog';
import SingleTopic from './pages/SingleTopic';
import SingleBlog from './pages/SingleBlog';

import ActivateAccount from './components/AuthPage/Activate';
import ForgotPassword from './components/AuthPage/Forgot';
import ResetPassword from './components/AuthPage/Reset';
import PrivateRoute from './components/AuthPage/PrivateRoute';
import AdminbRoute from './components/AuthPage/AdminRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/signin" component={SigninPage} exact />
      <Route path="/blogs" component={blog} exact />
      <Route path="/topic/:slug" component={SingleTopic} exact />
      <Route path="/blog/:slug" component={SingleBlog} exact />
      <Route path="/auth/activate/:token" component={ActivateAccount} exact />
      <Route path="/auth/forgot-password" component={ForgotPassword} exact />
      <Route
        path="/auth/password/reset/:token"
        component={ResetPassword}
        exact
      />
    </Switch>
  </BrowserRouter>
);

{
  /* 
<PrivateRoute path="/private" exact component={Private} />
<AdminbRoute path="/admin" exact component={Admin} />
<AdminbRoute path="/admin/topic/create" exact component={CreateTopic} />
<AdminbRoute path="/admin/blog/create" exact component={CreateBlog} /> 
*/
}

export default Routes;
