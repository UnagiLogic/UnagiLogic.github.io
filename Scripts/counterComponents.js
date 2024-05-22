import { purchasedResources } from "./purchasedResources.js";
import { updateResourceDisplay } from "./updateDisplayComponents.js";
import { initialResources } from "./resources.js";

// Function that gets called when you click the saltwaterAreaFishClickerButton (currentLocationButtonImage)
export function incrementFish(updateResources) {
    updateResources({
      setFishCount: function(prevFishCount) {
        return prevFishCount + purchasedResources.fishPerClick;
      }
    });
    updateResourceDisplay(resources.fish, resources.clay, resources.mud, resources.stone, resources.shrimp);
    displayFishImage(); // Calls the displayFishImage function
  
    if (resources.fish >= 100000) {
      document.getElementById("gameOver").innerText = "You win the game! for now..."
    }
  }
  
  // increment function for when the player clicks the swampAreaClickerButton
  // This function will add the number of mud per click to your total mud
  // This function will use the Document Object Model to change the number of mud in the HTML
//export function incrementMud() {
//    resources.mud += 1;
//    updateResourceDisplay(setFishCount, setClayCount, setMudCount, setStoneCount, setShrimpCount);
//    displayMudImage();
//  }