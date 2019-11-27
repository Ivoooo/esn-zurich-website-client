import React, { Component } from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import Menu from "./views/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Header height={"5"} />
        <Menu />
        <AppRouter />
      </div>
    );
  }
}



export default App;
