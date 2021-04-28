import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import MyAccount from "./pages/my-account-page/my-account-page.component";
import Shop from "./pages/shop/shop.component";
import Cart from "./components/cart/cart.component";
import CartPage from "./pages/cart-page/cart-page.component";
import { ProtectedRoute } from "./util";
import ThankYou from "./components/thank-you/thank-you.component";
import Dash from "./pages/dashboard/dash.component";
import { auth } from "./firebase/firebase";
import { checkUserSession } from "./redux/user/user.actions";
import PNF from "./pages/page-not-found/pnf.page";

function App({ signInUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        signInUser(user.uid);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [signInUser]);
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute
          exact
          path={process.env.PUBLIC_URL + "/dashboard"}
          component={Dash}
        />
        <Route path={process.env.PUBLIC_URL + "/shop"} component={Shop} />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Homepage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/my-account"}
          component={MyAccount}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/cart"}
          component={CartPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/order-success"}
          component={ThankYou}
        />
        <Route>
          <PNF />
        </Route>
      </Switch>
      <Cart />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signInUser: (firebase_uid) => dispatch(checkUserSession(firebase_uid)),
});
export default connect(null, mapDispatchToProps)(App);
