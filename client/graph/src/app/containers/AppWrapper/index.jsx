import React from "react";

import Header from "../../components/Shared/Header";
import SideNav from "../../components/Shared/SideNav";
import MainCanvas from "../MainCanvas";
import "./style.css";

class AppWrapper extends React.Component {
  render() {
    return (
      <>
        <Header></Header>

        <main className="main-height">
          <MainCanvas></MainCanvas>
          <SideNav></SideNav>
        </main>
      </>
    );
  }
}
export default AppWrapper;
