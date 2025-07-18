import React from "react";
import PropTypes from "prop-types";
import ResourceDisplayItem from "./ResourceDisplayItem";

/**
 * ExploreComponent renders the main interaction area for a given location,
 * including the primary clicker, inventory display, and location info.
 * It receives its state and click handlers from a parent component.
 */
function ExploreComponent({
  currentLocation,
  resources,
  handleFishClick,
  handleMudClick,
}) {
  /**
   * Determines which image to display for the main clicker button
   * based on the current game location.
   * @returns {string} The path to the clicker image.
   */
  function determineClickerImage() {
    if (currentLocation === "The Spawning Pool") {
      return "/Images/Buttons/saltwaterAreaFishClickerButton.png";
    } else if (currentLocation === "The Swamp Trail") {
      return "/Images/Buttons/swampAreaClickerButton.png";
    }
    // Return a default image if no location matches
    return "/Images/Buttons/defaultClickerButton.png";
  }

  /**
   * Determines which function to execute when the main clicker button is pressed
   * based on the current game location.
   * @returns {Function} The click handler function from props.
   */
  function determineClickerFunction() {
    if (currentLocation === "The Spawning Pool") {
      return handleFishClick;
    } else if (currentLocation === "The Swamp Trail") {
      return handleMudClick;
    }
    // Default action if location is not matched
    return () => console.warn("No action defined for this location.");
  }

  return (
    <div id="adventure-menu" className="container toggle-container">
      <div id="locationNameLabel">{currentLocation}</div>
      <div className="locationActivityMenu">
        <div className="row">
          <div className="col-5 activity">
            <div id="locationExploreLabel">EXPLORE</div>
            {/* Main clicker button */}
            <div id="locationExploreContainer">
              <img
                src={determineClickerImage()}
                width="300px"
                height="350px"
                id="currentLocationButtonImage"
                onClick={determineClickerFunction()}
                alt={`Explore ${currentLocation}`}
                // Prevents the default browser behavior of dragging images
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            {/* Inventory Display */}
            <div id="locationExploreInventoryLabel">INVENTORY</div>
            <div id="locationExploreInventoryContainer">
              <ResourceDisplayItem
                resourceType="fish"
                amount={resources.fish}
              />
              <ResourceDisplayItem
                resourceType="clay"
                amount={resources.clay}
              />
              <ResourceDisplayItem resourceType="mud" amount={resources.mud} />
              <ResourceDisplayItem
                resourceType="stone"
                amount={resources.stone}
              />
              <ResourceDisplayItem
                resourceType="shrimp"
                amount={resources.shrimp}
              />
            </div>
          </div>

          {/* Location Information Area */}
          <div id="locationInformationActivity" className="container">
            <div className="locationInformationSlot">
              <div id="adventureLog">
                Placeholder Text. This should be about two sentences on 2-3
                separate lines
              </div>
            </div>
            <div className="locationInformationSlot">
              <div id="notificationArea">
                Place holder Text. This should be about two sentences on 2-3
                separate lines
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ExploreComponent.propTypes = {
  /** The name of the current game location */
  currentLocation: PropTypes.string.isRequired,
  /** An object containing the player's current resources */
  resources: PropTypes.object.isRequired,
  /** Function to handle clicks in the fish location */
  handleFishClick: PropTypes.func.isRequired,
  /** Function to handle clicks in the mud location */
  handleMudClick: PropTypes.func.isRequired,
};

export default ExploreComponent;
