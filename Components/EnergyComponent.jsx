import React from "react";
import PropTypes from "prop-types";

/**
 * A component to display an animated energy bar.
 * @param {object} props - The props for the component.
 * @param {number} props.energy - The current energy level.
 * @param {number} props.maxEnergy - The maximum energy level.
 */
function EnergyComponent({ energy = 0, maxEnergy = 10 }) {
  // Calculate the width percentage directly.
  const energyPercentage = maxEnergy > 0 ? (energy / maxEnergy) * 100 : 0;
  const barStyle = {
    width: `${energyPercentage}%`,
  };

  return (
    <div className="energyContainer">
      <div className="energyBarContainer">
        {/* The width is now controlled by inline styles */}
        <div id="energyBar" style={barStyle}></div>
      </div>
      <div className="energyTextContainer">
        <p>
          <span id="showEnergy">{energy}</span> / {maxEnergy}
        </p>
      </div>
    </div>
  );
}
EnergyComponent.propTypes = {
  energy: PropTypes.number.isRequired,
  maxEnergy: PropTypes.number.isRequired,
};
export default EnergyComponent;
