import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { Counter } from "./Components/Counter/Counter";
import { EmiCalC } from "./Components/EMI Calculator/EmiCalC";
import { Home } from "./Components/Home/Home";
import { EmployeeList } from "./Components/Map & Search/Employee List/EmployeeList";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";

export const Landing = () => {
  return (
    <div>
      
<Router>
      <NavigationBar/>
      <Switch>
      <Route path="/Home">
      <Home/>
      </Route>
      <Route path="/Counter">
      <Counter/>
      </Route>
      <Route path="/Employees">
      <EmployeeList/>
      </Route>
      <Route path="/EmiCalc">
      <EmiCalC/>
      </Route>
      </Switch>
</Router>
    </div>
  );
};
