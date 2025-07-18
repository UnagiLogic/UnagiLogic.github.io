import React from "react";
import PropTypes from "prop-types";

function SplashScreen({ onStartGame }) {
  return (
    <div
      id="splash-screen"
      className="container-fluid toggle-container"
      onClick={onStartGame}
    >
      <h1>Developed by</h1>
      <h2>UnagiLogic</h2>
    </div>
  );
}

SplashScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default SplashScreen;
