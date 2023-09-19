import React from "react";
// Sections
import "../style/flexboxgrid.min.css";
import "../style/index.css";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer"



function Frontpage() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Footer /> 
    </>
  );
}

export default Frontpage;



