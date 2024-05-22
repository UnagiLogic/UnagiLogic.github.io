import React, { useState, useEffect } from "react";

function EnergyComponent({ energy, maxEnergy }) {
  return (
    <div id="containerForEnergyIndicator">
      <div id="energyBar">
        <div className="imageWrapper">
          <img src="Images/Icons/energy.png" id="energyImage" />
        </div>
        <p className="energyIndicatorText">
          Energy: <span id="showEnergy">{energy}</span> /{" "}
          <span id="showMaxEnergy">{maxEnergy}</span>
        </p>
      </div>
    </div>
  );
}

export default EnergyComponent;
