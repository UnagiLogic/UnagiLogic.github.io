import React from "react";

function InventoryMenu() {
  return (
    <div
      id="inventory-menu"
      className="container toggle-container d-none col-6"
    >
      <div id="inventoryNameLabel">INVENTORY</div>
      <div className="row">
        <div className="card" style={{ width: "10rem" }}>
          <div className="card-body">
            <img
              src="Images/Resources/fish.png"
              className="inventoryImage fishBGC card-img-top"
              width="75px"
              height="75px"
            />
            <p id="fishCounter">
              <span id="showFish" className="inventoryNumber">
                0
              </span>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <div className="card-body">
            <img
              src="Images/Resources/clay.png"
              className="inventoryImage clayBGC"
              width="75px"
              height="75px"
            />
            <p id="clayCounter">
              <span id="showClay" className="inventoryNumber">
                0
              </span>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <div className="card-body">
            <img
              src="Images/Resources/mud.png"
              className="inventoryImage mudBGC"
              width="75px"
              height="75px"
            />
            <p id="mudCounter">
              <span id="showMud" className="inventoryNumber">
                0
              </span>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <div className="card-body">
            <img
              src="Images/Resources/stone.png"
              className="inventoryImage stoneBGC"
              width="75px"
              height="75px"
            />
            <p id="stoneCounter">
              <span id="showStone" className="inventoryNumber">
                0
              </span>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <div className="card-body">
            <img
              src="Images/Resources/shrimp.png"
              className="inventoryImage shrimpBGC"
              width="75px"
              height="75px"
            />
            <p id="shrimpCounter">
              <span id="showShrimp" className="inventoryNumber">
                0
              </span>
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <div className="card-body">
            <img
              src="Images/Resources/fish.png"
              className="card-img-top"
              alt="Fish"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryMenu;
