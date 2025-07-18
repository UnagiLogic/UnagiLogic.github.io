import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export function GameProvider({ children, onToggleSplash }) {
  // State for resources
  const [resources, setResources] = useState({
    fish: 0,
    clay: 0,
    mud: 0,
    stone: 0,
    shrimp: 0,
  });

  // State for energy
  const [energy, setEnergy] = useState(0);
  const [maxEnergy, setMaxEnergy] = useState(10);

  // Function to update energy
  const updateEnergy = (amount) => {
    setEnergy((prevEnergy) => Math.max(0, prevEnergy + amount));
  };

  // State for dialogue and story
  const [currentSegment, setCurrentSegment] = useState({
    text: "I wonder where I am?",
    leftCharacter: "/Images/Characters/character1.png",
    rightCharacter: null,
  });
  const [hasStarted, setHasStarted] = useState(false);

  const handleNextSegment = () => {
    setCurrentSegment({
      text: "Who are you!",
      leftCharacter: "/Images/Characters/character1.png",
      rightCharacter: "/Images/Characters/Character2/character2_shocked.png",
    });
    setHasStarted(true);
  };

  // State for Adventure Log
  const [logEntries, setLogEntries] = useState([]);

  const handleLogActivity = (activity) => {
    if (hasStarted) {
      setLogEntries((prevEntries) => [activity, ...prevEntries].slice(0, 5));
    }
  };

  // State for current location
  const [currentLocation, setCurrentLocation] = useState("The Spawning Pool");

  const handleLocationChange = (newLocation) => {
    setCurrentLocation(newLocation);
  };

  // Handlers for click events (can be expanded)
  const handleFishClick = () => {
    setResources((prev) => ({ ...prev, fish: prev.fish + 1 }));
    // Add energy logic here if needed
  };

  const handleMudClick = () => {
    setResources((prev) => ({ ...prev, mud: prev.mud + 1 }));
  };

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      resources,
      setResources,
      energy,
      maxEnergy,
      updateEnergy,
      currentSegment,
      handleNextSegment,
      logEntries,
      handleLogActivity,
      currentLocation,
      handleLocationChange,
      handleFishClick,
      handleMudClick,
      onToggleSplash,
    }),
    [resources, energy, maxEnergy, currentSegment, logEntries, currentLocation]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onToggleSplash: PropTypes.func,
};
