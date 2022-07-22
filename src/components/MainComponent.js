import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/contactus" element={<Navigate replace to="/home" />} />
          <Route path="/aboutus" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
