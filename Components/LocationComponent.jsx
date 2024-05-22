import React, { useState } from "react";

// Create a function that changes the location of the player.
// This function will change the background image to the new location.
// This function will change the location button image to the new location.
// This function will change the location name label to the new location.
// This function will change the increment function to the new location increment function.

function LocationComponent({ currentLocation, onLocationChange }) {
  const [showTooltipOne, setShowTooltipOne] = useState(false);
  const [showTooltipTwo, setShowTooltipTwo] = useState(false);

  const handleSpawningPoolMouseOver = () => setShowTooltipOne(true);
  const handleSpawningPoolMouseOut = () => setShowTooltipOne(false);

  const handleSwampTrailMouseOver = () => setShowTooltipTwo(true);
  const handleSwampTrailMouseOut = () => setShowTooltipTwo(false);

  return (
    <div id="locations-menu" className="container toggle-container d-none">
      <div id="containerForLocationMenu">
        <h2 className="categoryName">LOCATIONS</h2>
        <button
          id="spawningPoolLocationButton"
          onMouseOver={handleSpawningPoolMouseOver}
          onMouseOut={handleSpawningPoolMouseOut}
          onClick={() => onLocationChange("The Spawning Pool")}
        >
          The Spawning Pool
        </button>
        <button
          id="swampTrailLocationButton"
          onMouseOver={handleSwampTrailMouseOver}
          onMouseOut={handleSwampTrailMouseOut}
          onClick={() => onLocationChange("The Swamp Trail")}
        >
          The Swamp Trail
        </button>
      </div>
      <div
        className="containerForTooltipOne"
        style={{ display: showTooltipOne ? "flex" : "none" }}
      >
        <div className="tooltipNameOne">THE SPAWNING POOL</div>
        <div className="containerForLocationDescriptionOne">
          <div className="categoryDescriptionLabelOne">DESCRIPTION</div>
          <div className="tooltipDescriptionOne">
            This is the saltwater area. It is a vast ocean with many fish.
          </div>
        </div>
        <div className="containerForLocationBiomeOne">
          <div className="categoryBiomeLabelOne">BIOME</div>
          <div className="tooltipBiomeOne">Saltwater</div>
        </div>
        <div className="containerForLocationSpeciesOne">
          <div className="categorySpeciesLabelOne">SPECIES</div>
          <div className="tooltipSpeciesOne">Fish</div>
        </div>
      </div>
      <div
        className="containerForTooltipTwo"
        style={{ display: showTooltipTwo ? "flex" : "none" }}
      >
        <div className="tooltipNameTwo">THE SWAMP TRAIL</div>
        <div className="containerForLocationDescriptionTwo">
          <div className="categoryDescriptionLabelTwo">DESCRIPTION</div>
          <div className="tooltipDescriptionTwo">
            This is the swamp trail. It is a dangerous place that many don't
            dare to venture through.
          </div>
        </div>
        <div className="containerForLocationBiomeTwo">
          <div className="categoryBiomeLabelTwo">BIOME</div>
          <div className="tooltipBiomeTwo">Swamp</div>
        </div>
        <div className="containerForLocationSpeciesTwo">
          <div className="categorySpeciesLabelTwo">SPECIES</div>
          <div className="tooltipSpeciesTwo">Mud</div>
        </div>
      </div>
    </div>
  );
}

export default LocationComponent;
