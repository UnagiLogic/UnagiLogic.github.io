import React, { useState, useEffect, useRef } from "react";
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
import AdventureLogComponent from "./Components/AdventureLogComponent";
import StoryDisplay from "./Components/StoryDisplay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// State for resources
function App() {
  let [resources, setResources] = useState({
    fish: 0, // Initial fish count to 0
    clay: 0,
    mud: 0,
    stone: 0,
    shrimp: 0,
  });

  // State for energy
  let [energy, setEnergy] = useState(0);
  let maxEnergy = 10;

  // Function to update energy
  function updateEnergy(amount) {
    setEnergy((prevEnergy) => Math.max(0, prevEnergy + amount)); // Clamp energy at 0
  }

  // Handlers for click events
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

  // State for current segment
  let [currentSegment, setCurrentSegment] = useState({
    text: "I wonder where I am?",
    leftCharacter: "/Images/characters/character1.png",
    rightCharacter: null,
  });

  const [hasStarted, setHasStarted] = useState(false);

  const handleNextSegment = () => {
    setCurrentSegment({
      text: "Who are you!",
      leftCharacter: "/Images/Characters/character1.png", // New character on the left
      rightCharacter: "/Images/Characters/Character2/character2_shocked.png", // No character on the right
    });
    setHasStarted(true);
  };

  const [logEntries, setLogEntries] = useState([]); // Start with an empty array

  const handleLogActivity = (activity) => {
    if (hasStarted) {
      setLogEntries((prevEntries) => [activity, ...prevEntries].slice(0, 5)); // Only show 5 entries
      console.log("Activity logged:", activity);
    }
  };

  // State for current location
  let [currentLocation, setCurrentLocation] = useState("The Spawning Pool");

  // Function to handle location change
  function handleLocationChange(newLocation) {
    setCurrentLocation(newLocation);
  }

  // Function to update the energy bar
  function updateEnergyBar() {
    let energyPercentage = (energy / maxEnergy) * 100;
    anime({
      targets: "#energyBar",
      width: `${energyPercentage}%`,
      easing: "linear",
      duration: 1000,
    });
  }

  // Effect to update energy bar and show energy
  useEffect(() => {
    updateEnergyBar();
    document.getElementById("showEnergy").innerHTML = energy;
  }, [energy]);

  // Function to play energy animation
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

  // Effect to toggle display when component mounts
  useEffect(() => {
    toggleDisplay();
  }, []);

  // Render the components
  return (
    <div className="gameScreenContainer">
      <SplashScreen /> {/* Show the splashScreen */}
      <BackgroundComponent currentLocation={currentLocation} />
      <InGameMenu />
      <AdventureLogComponent logEntries={logEntries} />
      <StoryDisplay
        segment={currentSegment}
        onNextSegment={handleNextSegment}
        logActivity={handleLogActivity}
      />
      <EnergyComponent energy={energy} maxEnergy={maxEnergy} />
      <InventoryMenu />
      <LocationComponent
        currentLocation={currentLocation}
        onLocationChange={handleLocationChange}
      />
      <ExploreComponent
        currentLocation={currentLocation}
        resources={resources}
        setResources={setResources}
        energy={energy} // Pass energy as a prop to ExploreComponent
        setEnergy={setEnergy} // Pass the setter function to ExploreComponent'
        maxEnergy={maxEnergy}
        updateEnergy={updateEnergy} // Pass the updateEnergy function to ExploreComponent
        playEnergyAnimation={playEnergyAnimation}
        updateEnergyBar={updateEnergyBar}
        handleFishClick={handleFishClick}
        handleMudClick={handleMudClick}
      />
      <BestiaryComponent />
      <FloatingResourceContainers />{" "}
    </div>
  );
}

export default App;
