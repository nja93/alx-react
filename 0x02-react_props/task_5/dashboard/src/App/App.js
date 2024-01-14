import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";

export default function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};