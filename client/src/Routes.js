import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import blog from './pages/Blog';
import SingleTopic from './pages/SingleTopic';
import SingleBlog from './pages/SingleBlog';
import PrivatePage from "./pages/Private"
import ProfileUpdatePage from "./pages/ProfileUpdate"

import ActivateAccount from './components/AuthPage/Activate';
import ForgotPassword from './components/AuthPage/Forgot';
import ResetPassword from './components/AuthPage/Reset';
import PublicRoute from './components/AuthPage/PublicRoute';
import PrivateRoute from './components/AuthPage/PrivateRoute';
import AdminRoute from './components/AuthPage/AdminRoute';
import CampaignCreatePage from './components/AdminPage/CampaignPage/CreateCampaign';

import Admin from './pages/Admin';
import AdminCreateTopic from './pages/AdminCreateTopic';
import AdminReadTopic from "./pages/AdminReadTopic";
import AdminReadCampaign from "./pages/AdminReadCampaign";
import AdminReadBlog from "./pages/AdminReadBlog";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <PublicRoute path="/signup" component={SignupPage} exact />
      <PublicRoute path="/signin" component={SigninPage} exact />
      <PrivateRoute path="/private" component={PrivatePage} exact />
      <PrivateRoute path="/private/update/:id" component={ProfileUpdatePage} exact />
      <Route path="/blogs" component={blog} exact />
      <Route path="/topic/:slug" component={SingleTopic} exact />
      <Route path="/blog/:slug" component={SingleBlog} exact />
      <AdminRoute path="/admin" component={Admin} exact />
      <AdminRoute path="/admin/topics" component={AdminReadTopic} exact />
      <AdminRoute path="/admin/topic/create" component={AdminCreateTopic} exact />
      <AdminRoute path="/admin/campaigns" component={AdminReadCampaign} exact />
      <AdminRoute path="/admin/campaign/create" component={CampaignCreatePage} exact />
      <AdminRoute path="/admin/blogs" component={AdminReadBlog} exact />
      <PublicRoute
        path="/auth/activate/:token"
        component={ActivateAccount}
        exact
      />
      <PublicRoute
        path="/auth/forgot-password"
        component={ForgotPassword}
        exact
      />
      <PublicRoute
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
