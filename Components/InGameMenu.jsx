import React from "react";
import PropTypes from "prop-types";
import { useGameContext } from "../Context/GameContext";

function InGameMenu({ onToggleMenu }) {
  const { onToggleSplash } = useGameContext() || {};

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
            onClick={() => onToggleMenu("adventure-menu explore-area")}
            data-container="adventure-menu explore-area"
            type="button"
          >
            EXPLORE
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("inventory-menu")}
            data-container="inventory-menu"
            type="button"
          >
            INVENTORY
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("character-menu")}
            data-container="character-menu"
            type="button"
          >
            CHARACTER
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("locations-menu")}
            data-container="locations-menu"
            type="button"
          >
            LOCATIONS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("actions-menu")}
            data-container="actions-menu"
            type="button"
          >
            ACTIONS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("insight-menu")}
            data-container="insight-menu"
            type="button"
          >
            INSIGHTS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("bestiary-menu")}
            data-container="bestiary-menu"
            type="button"
          >
            BESTIARY
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("skill-menu")}
            data-container="skill-menu"
            type="button"
          >
            SKILLS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("stats-menu")}
            data-container="stats-menu"
            type="button"
          >
            STATS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("adventure-log")}
            data-container="adventure-log"
            type="button"
          >
            ADVENTURE LOG
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("save-menu")}
            data-container="save-menu"
            type="button"
          >
            SAVE
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("load-menu")}
            data-container="load-menu"
            type="button"
          >
            LOAD
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("developer-tools-menu")}
            data-container="developer-tools-menu"
            type="button"
          >
            DEVELOPER TOOLS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("settings-menu")}
            data-container="settings-menu"
            type="button"
          >
            SETTINGS
          </button>
        </li>
        <li>
          <button
            className="dropdown-item toggle-button"
            onClick={() => onToggleMenu("exit-menu")}
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
            onClick={onToggleSplash}
            type="button"
          >
            SPLASH PAGE
          </button>
        </li>
      </ul>
    </div>
  );
}

InGameMenu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default InGameMenu;
