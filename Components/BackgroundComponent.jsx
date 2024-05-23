import React from "react";

function BackgroundComponent({ currentLocation }) {
  const determineBackgroundImage = () => {
    if (currentLocation === "The Spawning Pool") {
      return "/Images/Backgrounds/saltwaterAreaBackground.png";
    } else if (currentLocation === "The Swamp Trail") {
      return "/Images/Backgrounds/swampAreaBackground.png";
    }
  };

  return (
    <div className="backgroundContainer">
      <img
        src={determineBackgroundImage()}
        id="currentBackgroundImage"
        alt="Current Location Background"
      />
    </div>
  );
}

export default BackgroundComponent;
