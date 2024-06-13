import React from "react";
import { feedAction, buySearchAction } from "../Scripts/actions";

function ActionButtonsComponent({
  resources,
  setResources,
  energy,
  setEnergy,
  maxEnergy,
  updateEnergy,
  playEnergyAnimation,
  updateEnergyBar,
}) {
  // Receive resources as a prop
  return (
    <div className="col-3 activity">
      <div className="locationActionsLabel">ACTIONS</div>
      <div className="locationActionsButtonLabel">FEED</div>
      <div className="locationActionsButtonContainer">
        <div className="locationActionsButton">
          <img
            src="/Images/Icons/eat.png"
            width="150px"
            height="150px"
            id="feedActionButton"
            onClick={() =>
              feedAction(
                resources,
                setResources,
                energy,
                setEnergy,
                maxEnergy,
                updateEnergy,
                playEnergyAnimation
              )
            }
          />
        </div>
        <div className="locationActionsButtonCost">
          <img
            src="/Images/Resources/fish.png"
            width="75px"
            height="75px"
            title="Fish: Feed the entity to gain energy"
          />
          <span id="feedActionFishCost">1</span>
        </div>
      </div>

      <div className="locationActionsButtonLabel">SEARCH</div>
      <div className="locationActionsButtonContainer">
        <div className="locationActionsButton">
          <img
            src="/Images/Icons/search.png"
            width="150px"
            height="150px"
            id="buySearchActionButton"
            onClick={() =>
              buySearchAction(
                resources,
                setResources,
                energy,
                setEnergy,
                maxEnergy,
                updateEnergy,
                playEnergyAnimation,
                updateEnergyBar
              )
            }
          />
        </div>
        <div className="locationActionsButtonCost">
          <img
            src="/Images/Icons/energy.png"
            width="75px"
            height="75px"
            title="Energy: Used to perform actions"
          />
          <span id="searchActionEnergyCost">1</span>
        </div>
      </div>
    </div>
  );
}

wd;
export default ActionButtonsComponent;
