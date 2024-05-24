import React from "react";

function StoryDisplay({ segment, onNextSegment, logActivity }) {
  const handleClick = () => {
    logActivity(segment.text); // Log the segment's text before moving on
    onNextSegment(); // Call the function from the parent component
  };

  return (
    <div className="storyDisplayContainer">
      {segment.leftCharacter && (
        <img
          className="character-image character-left"
          src={segment.leftCharacter}
          alt="Left Character"
        />
      )}
      <div className="story-display" onClick={handleClick}>
        <p>{segment.text}</p>
      </div>
      {segment.rightCharacter && (
        <img
          className="character-image character-right"
          src={segment.rightCharacter}
          alt="Right Character"
        />
      )}
    </div>
  );
}

export default StoryDisplay;
