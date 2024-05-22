import React from "react";

function AchievementItem({ image, name, title }) {
  return (
    <div className="achievementContainer">
      <div className="achievementImageContainer">
        <img src={image} alt={name} width="50px" height="50px" />
      </div>
      <p className="achievementName" title={title}>
        {name}
      </p>
    </div>
  );
}

export default AchievementItem;
