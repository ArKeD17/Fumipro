import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomeView from "./Home";
// import RestaurantView from "./Restaurant/OneRestaurant";
const MyRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Fumipro" exact component={HomeView} />
          {/* <Route path="/Fumipro/:id" exact component={RestaurantView} /> */}
          <Route render={(props) => <Redirect to="/Fumipro" />} />
        </Switch>
      </Router>
    </>
  );
};

export default MyRouter;
