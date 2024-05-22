import React from "react";

function InGameMenu() {
  return (
    <div id="in-game-menu" className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="adventure-menu explore-area"
            type="button"
          >
            EXPLORE
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="inventory-menu"
            type="button"
          >
            INVENTORY
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="character-menu"
            type="button"
          >
            CHARACTER
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="locations-menu"
            type="button"
          >
            LOCATIONS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="actions-menu"
            type="button"
          >
            ACTIONS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="insight-menu"
            type="button"
          >
            INSIGHTS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="bestiary-menu"
            type="button"
          >
            BESTIARY
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="skill-menu"
            type="button"
          >
            SKILLS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="stats-menu"
            type="button"
          >
            STATS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="adventure-log"
            type="button"
          >
            ADVENTURE LOG
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="save-menu"
            type="button"
          >
            SAVE
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="load-menu"
            type="button"
          >
            LOAD
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="developer-tools-menu"
            type="button"
          >
            DEVELOPER TOOLS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="settings-menu"
            type="button"
          >
            SETTINGS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="exit-menu"
            type="button"
          >
            EXIT
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            data-container="splash-screen"
            type="button"
          >
            SPLASH PAGE
          </button>
        </li>
      </ul>
    </div>
  );
}

export default InGameMenu;
