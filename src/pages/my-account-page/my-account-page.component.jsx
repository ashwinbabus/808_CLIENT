import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'

import Header from "../../components/header/header.component";
import SignInSignUp from "../../components/sign-in-sign-up/sign-in-sign-up.component";
import AccountDetails from "../../components/account-details/account-details.component";


import { selectCurrentUser } from "../../redux/user/user.selector";

import "./my-account-page.styles.scss";

const MyAccount = ({ user }) => {
  return (
    <div className="my-account-page">
      <Header background={true} />
      <div className="my-account-title">
        <h1>MY ACCOUNT</h1>
        <hr />
      </div>
      {user ? <AccountDetails user={user} /> : <SignInSignUp />}
      <h1>Login using : ashwinbabus21@gmail.com , password : adminpassword to access the dashboard where you can view and add products</h1>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(MyAccount);
