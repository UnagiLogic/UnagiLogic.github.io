import { resourceCache } from "../Scripts/resourceCache.js";
import { narrator } from "../Scripts/narrator.js";


// Game State Variables
let animationInProgress = false;

// Cost of Action Variables
let searchActionCost = 1;

// Function feedAction
// This function will check what type of food the player has.
// If the player has fish it will call the eatFish function.
// If the player has shrimp it will call the eatShrimp function.
// If the player has no food it will display a message that says "You have no food to eat."
export function feedAction(resources, setResources, energy, setEnergy, maxEnergy, updateEnergy, playEnergyAnimation, showFloatingNumber) {
    if (resources.fish >= 1) {
      eatFish(resources, setResources, energy, setEnergy, maxEnergy, updateEnergy, playEnergyAnimation, showFloatingNumber);
    } else if (resources.shrimp >= 1) {
      eatShrimp(resources, setResources);
    } else {
      console.log("You have no food to eat.");
    }
  }

export function buySearchAction(resources, setResources, energy, setEnergy, maxEnergy, updateEnergy, updateEnergyBar, showFloatingNumber) {
    if (energy >= searchActionCost) {
      updateEnergy(-searchActionCost);
      updateEnergyBar()
      showFloatingNumber(`-${searchActionCost}`, "loss");
      searchAction(resources, setResources);
    } else {
      console.log("You do not have enough energy to do this action.");
    }
  }

// This is the searchAction function.
// This function will choose 1 of 4 actions to give the player based on percent chance.
// It can spawn a resource cache at a 40% chance.
// It can spawn a narrator that gives lore about the area at 20% chance.
// It can spawn a stranger or creature at a 30% chance.
// It can spawn a weird object at a 10% chance.
function searchAction(resources, setResources) {
  let randomNumber = Math.random();
  if (randomNumber <= 0.4) {
    resourceCache(resources, setResources);
    console.log("Resource Cache");
  } else if (randomNumber <= 0.6) {
    narrator();
    console.log("Narrator");
  } else if (randomNumber <= 0.9) {
    console.log("Stranger or Creature");
  } else {
    console.log("Weird Object");
  }
}


// Function to eat a fish and update energy
function eatFish(resources, setResources, energy, setEnergy, maxEnergy, updateEnergy, playEnergyAnimation, showFloatingNumber) {
console.log("eatFish called, resources:", resources);

  if (animationInProgress) {
    console.log("Animation in progress");
    return;
  }

  if (resources.fish >= 1) {
    if (energy >= maxEnergy) {
      console.log("You're no longer hungry.");
    } else {
      setResources((prevResources) => ({
        ...prevResources,
        fish: prevResources.fish - 1,
      }));

      console.log("Before updateEnergy call in eatFish");
      updateEnergy(1);
      //Console.log("Energy:", energy);
      console.log("Energy", energy);

      console.log("Energy after update:", energy); 
      playEnergyAnimation(energy, 1);
      showFloatingNumber("+1", "gain");
      console.log("You ate a fish.");
    }
  } else {
    console.log("You have no fish to eat.");
  }
}

// This function is used to display an image in the containerForResourceIndicator each time the saltwaterAreaFishClickerButton (currentLocationButtonImage) is pressed.
// The image will be randomly selected from the Images/Resources/saltwaterFish/fish folder of 6 images. 
// The class fishImage has a CSS
// The containerForResourceIndicator appears inside the saltwaterAreaFishClickerButton (currentLocationButtonImage) CSS width and height at random places.
// The fishImage will be displayed in the containerForResourceIndicator CSS width and height.
// The fishImage needs to be removed after a few seconds.
function displayFishImage() {
  let fishImage = document.createElement("img");
  fishImage.src = "/Images/Resources/saltwaterFish/fish" + Math.floor(Math.random() * 6) + ".png";
  fishImage.classList.add("fishImage");
  document.getElementById("containerForResourceIndicator").appendChild(fishImage);
  fishImage.style.left = Math.floor(Math.random() * 100) + "%";
  fishImage.style.top = Math.floor(Math.random() * 100) + "%";

  //Remove the fish image after a few seconds
  setTimeout(function() {
    fishImage.remove();
  }, 3000);
}

// Create a function that displays an image in the containerForResourceIndicator each time the swampAreaClickerButton is pressed.
function displayMudImage() {
  let mudImage = document.createElement("img");
  mudImage.src = "/Images/Resources/swampMud/mud" + Math.floor(Math.random() * 6) + ".png";
  mudImage.classList.add("mudImage");
  document.getElementById("containerForResourceIndicator").appendChild(mudImage);
  mudImage.style.left = Math.floor(Math.random() * 100) + "%";
  mudImage.style.top = Math.floor(Math.random() * 100) + "%";

  //Remove the mud image after a few seconds
  setTimeout(function() {
    mudImage.remove();
  }, 3000);
}