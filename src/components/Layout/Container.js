import React from "react";
import classes from "./Container.module.css";
import Footer from "./Footer";
const Container = (props) => {
  return (
    <>
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Container;
