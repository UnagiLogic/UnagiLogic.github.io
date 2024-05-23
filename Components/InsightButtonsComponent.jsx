import React from "react";
import { useState, useEffect } from "react";

function InsightButtonsComponent({
  resources,
  setResources,
  energy,
  setEnergy,
  gainFishingInsight,
  updateEnergyBar,
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="col-4 activity">
      <div id="locationInsightsNameLabel">INSIGHTS</div>
      <div id="locationInsightOneLabel">FISHING INSIGHT</div>
      <div className="locationInsightSlot">
        <div id="locationInsightsButtonContainer">
          <img
            src="/Images/Icons/fishingInsight.png"
            width="150px"
            height="150px"
            id="fishingInsightActionButton"
            onClick={() => {
              console.log(
                "Before gainFishingInsight call in InsightButtonsComponent, resources:",
                resources
              );
              gainFishingInsight(
                resources,
                setResources,
                energy,
                setEnergy,
                updateEnergyBar
              );
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 1000);
            }}
          />
        </div>
        <div className="locationInsightButtonCost">
          <img
            src="/Images/Icons/energy.png"
            width="75px"
            height="75px"
            title="Energy: Used to perform actions"
          />
          <span id="searchActionEnergyCost">1</span>
          <img
            src="/Images/Resources/fish.png"
            width="75px"
            height="75px"
            title="Fish: Feed the entity to gain energy"
          />
          <span id="searchActionFishCost">10</span>
        </div>
      </div>
      <div className="locationInsightSlot"></div>
      <div className="locationInsightSlot"></div>
      <div className="locationInsightSlot"></div>
    </div>
  );
}

export default InsightButtonsComponent;
