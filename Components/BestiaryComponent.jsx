import React from "react";
import { useState } from "react";
import AchievementItem from "./AchievementItem";

function BestiaryComponent() {
  const [currentBeast, setCurrentBeast] = useState("fish"); // Start with fish

  // Data for beasts (you could fetch this from a file/API)
  const beasts = {
    fish: {
      name: "FISH",
      image: "Images/Resources/fish.png",
      description: "It looks like a fish.",
      notes: [
        "Whoa! You can eat fish raw!!",
        "This fish is abundant around here.",
      ],
      statistics: [
        "Catch Percentage: 100%",
        "Fish Per Second = 0",
        "Fish per click = 1",
      ], // Make this dynamic later
      achievements: [
        {
          image: "Images/Achievements/Bestiary Fish/fishCaught10.png",
          name: "I caught 10!",
          title: "You can catch a new type of fish",
        },
        // ... more achievements
      ],
    },
    // ... data for other beasts (clay, mud, etc.)
  };

  //Function to render beast image
  function renderBeastImage(currentBeast) {
    if (currentBeast in beasts) {
      return (
        <img
          src={beasts[currentBeast].image}
          alt={beasts[currentBeast].name}
          width="100px"
          height="100px"
        />
      );
    } else {
      return <div>No image available</div>; //Or placeholder image
    }
  }

  return (
    <div
      id="bestiary-menu"
      className="bestiaryContainer container toggle-container d-none"
    >
      {/* Left Page Container */}
      <div id="leftPageContainer" className="bestiaryPage">
        <div className="bestiaryLeftPageMenu">
          <button id="bestiaryCreatureTypeButton">BESTIARY</button>
        </div>
        <div id="bestiaryCreatureTypeContainer">
          <div className="bestiaryName">{beasts[currentBeast].name}</div>
          <div className="bestiaryImage">{renderBeastImage(currentBeast)}</div>
          <div className="bestiaryDescriptionLabel">DESCRIPTION</div>
          <div className="bestiaryDescription">
            <p>{beasts[currentBeast].description}</p>
          </div>
          <div className="bestiaryNotesLabel">ADVENTURE NOTES</div>
          <div className="bestiaryNotes">
            {beasts[currentBeast].notes.map((note, index) => (
              <p key={index}>
                Adventure Notes {index + 1}: {note}
              </p>
            ))}
          </div>
          <div className="bestiaryStatisticsLabel">STATISTICS</div>
          <div className="bestiaryStatistics">
            {beasts[currentBeast].statistics.map((stat, index) => (
              <p key={index}>{stat}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Page Container */}
      <div id="rightPageContainer" className="bestiaryPage">
        <div className="bestiaryExpertiseLabel">Expertise</div>

        <div className="achievementContainer">
          {beasts[currentBeast].achievements.map((achievement, index) => (
            <AchievementItem key={index} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestiaryComponent;
