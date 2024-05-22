import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import SplashScreen from "./Components/SplashScreen";
import toggleDisplay from "./Scripts/toggleDisplay";
import ExploreComponent from "./Components/ExploreComponent";
import InGameMenu from "./Components/InGameMenu";
import InventoryMenu from "./Components/InventoryMenu";
import FloatingResourceContainers from "./Components/FloatingResourceContainers";
import EnergyComponent from "./Components/EnergyComponent";
import LocationComponent from "./Components/LocationComponent";
import BackgroundComponent from "./Components/BackgroundComponent";
import BestiaryComponent from "./Components/BestiaryComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  let [resources, setResources] = useState({
    fish: 0, // Initial fish count to 0
    clay: 0, // Initial clay count to 0
    mud: 0, // Initial mud count to 0
    stone: 0, // Initial stone count to 0
    shrimp: 0, // Initial shrimp count to 0
  });

  let [energy, setEnergy] = useState(0);
  let maxEnergy = 10;

  function updateEnergy(amount) {
    setEnergy((prevEnergy) => Math.max(0, prevEnergy + amount)); // Clamp energy at 0
  }

  let handleFishClick = () => {
    setResources((prevResources) => ({
      ...prevResources,
      fish: prevResources.fish + purchasedResources.fishPerClick,
    }));

    updateResourceDisplay(resources.fish + purchasedResources.fishPerClick); // Calls the updateResourceDisplay function
  };

  let handleMudClick = () => {
    setResources((prevResources) => ({
      ...prevResources,
      mud: prevResources.mud,
    }));

    updateResourceDisplay(resources.mud); // Calls the updateResourceDisplay function
  };

  let [currentLocation, setCurrentLocation] = useState("The Spawning Pool");

  function handleLocationChange(newLocation) {
    setCurrentLocation(newLocation);
  }

  function updateEnergyBar() {
    let energyPercentage = (energy / maxEnergy) * 100;
    anime({
      targets: "#energyBar",
      width: `${energyPercentage}%`,
      easing: "linear",
      duration: 1000,
    });
  }

  useEffect(() => {
    updateEnergyBar();
    document.getElementById("showEnergy").innerHTML = energy;
  }, [energy]);

  function playEnergyAnimation(currentEnergy, relativeWidthChange) {
    let targetEnergyPercentage = currentEnergy + relativeWidthChange;
    let absoluteEnergyChange = Math.abs(targetEnergyPercentage - currentEnergy);
    let getDuration = (energyChange) => {
      // ...
    };

    anime({
      targets: "#energyBar",
      width: `+=${relativeWidthChange}%`,
      duration: getDuration(absoluteEnergyChange),
      easing: "linear",
      update: () => {
        updateEnergyBar();
      },
    });
  }

  // Call toggleDisplay when the component mounts
  useEffect(() => {
    toggleDisplay();
  }, []);

  return (
    <div className="gameScreenContainer">
      {/* Bootstrap grid */}
      <SplashScreen /> {/* Show the splashScreen */}
      <BackgroundComponent currentLocation={currentLocation} />
      <InGameMenu /> {/* Show the InGameMenu */}
      {/* Show the EnergyComponent */}
      <EnergyComponent energy={energy} maxEnergy={maxEnergy} />
      <InventoryMenu /> {/* Show the InventoryMenu */}
      <LocationComponent
        currentLocation={currentLocation}
        onLocationChange={handleLocationChange}
      />{" "}
      {/* Show the LocationComponent */}
      <ExploreComponent
        currentLocation={currentLocation}
        resources={resources}
        setResources={setResources}
        energy={energy} // Pass energy as a prop to ExploreComponent
        setEnergy={setEnergy} // Pass the setter function to ExploreComponent'
        maxEnergy={maxEnergy} // Pass maxEnergy as a prop to ExploreComponent
        updateEnergy={updateEnergy} // Pass the updateEnergy function to ExploreComponent
        playEnergyAnimation={playEnergyAnimation}
        updateEnergyBar={updateEnergyBar}
        handleFishClick={handleFishClick}
        handleMudClick={handleMudClick}
      />
      {/* Show the BestiaryComponent */}
      <BestiaryComponent />
      {/* Show the ExploreComponent */}
      <FloatingResourceContainers />{" "}
      {/* Show the FloatingResourceContainers as needed */}
    </div>
  );
}

export default App;
