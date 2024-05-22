import React from "react";

function ResourceDisplayItem({ resourceType, amount }) {
  return (
    <div className={`locationExploreInventorySlot ${resourceType}BGC`}>
      <img
        src={`Images/Resources/${resourceType}.png`}
        width="75px"
        height="75px"
        className="inventoryImage"
        alt={`${resourceType} icon`}
      />
      <span className="locationInventoryNumber">{amount}</span>
    </div>
  );
}

export default ResourceDisplayItem;
