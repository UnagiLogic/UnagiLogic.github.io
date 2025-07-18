import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import SplashScreen from "./Components/SplashScreen";
import ExploreComponent from "./Components/ExploreComponent";
import InGameMenu from "./Components/InGameMenu";
import InventoryMenu from "./Components/InventoryMenu";
import FloatingResourceContainers from "./Components/FloatingResourceContainers";
import EnergyComponent from "./Components/EnergyComponent";
import LocationComponent from "./Components/LocationComponent";
import BackgroundComponent from "./Components/BackgroundComponent";
import BestiaryComponent from "./Components/BestiaryComponent";
import AdventureLogComponent from "./Components/AdventureLogComponent";
import StoryAndDialogueBox from "./Components/StoryAndDialogueBox";
import { GameProvider, useGameContext } from "./Context/GameContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const {
    energy,
    maxEnergy,
    currentLocation,
    logEntries,
    currentSegment,
    handleNextSegment,
    handleLogActivity,
    handleLocationChange,
    resources,
    setResources,
    updateEnergy,
    handleMudClick,
    handleFishClick, // Add the missing function here
    onToggleSplash,
  } = useGameContext();
  const [visibleMenus, setVisibleMenus] = useState({});

  const handleStartGame = () => {
    setIsSplashVisible(false);
  };

  // This function will be passed to the InGameMenu via context
  const handleToggleSplash = () => {
    setIsSplashVisible((prev) => !prev);
  };

  // Generic function to toggle the visibility of different UI panels
  const toggleMenu = (menuId) => {
    setVisibleMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <>
      {isSplashVisible && <SplashScreen onStartGame={handleStartGame} />}
      <div className={`gameScreenContainer ${isSplashVisible ? "hidden" : ""}`}>
        <BackgroundComponent currentLocation={currentLocation} />
        {/* Pass the toggleMenu function to the InGameMenu */}
        <InGameMenu onToggleMenu={toggleMenu} />
        <AdventureLogComponent logEntries={logEntries} />
        <StoryAndDialogueBox
          segment={currentSegment}
          onNextSegment={handleNextSegment}
          logActivity={handleLogActivity}
        />
        <EnergyComponent energy={energy} maxEnergy={maxEnergy} />
        <InventoryMenu isVisible={visibleMenus["inventory-menu"]} />
        <LocationComponent
          currentLocation={currentLocation}
          onLocationChange={handleLocationChange}
        />
        <ExploreComponent
          currentLocation={currentLocation}
          resources={resources}
          setResources={setResources}
          energy={energy}
          maxEnergy={maxEnergy}
          updateEnergy={updateEnergy}
          handleMudClick={handleMudClick}
          handleFishClick={handleFishClick}
        />
        <BestiaryComponent />
        <FloatingResourceContainers />
      </div>
    </>
  );
}

root.render(
  <React.StrictMode>
    {/* The Provider must wrap the component that consumes its context */}
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
