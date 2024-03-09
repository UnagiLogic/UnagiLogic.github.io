// Constants and configuration
const clickToStart = document.getElementById("clickToStart");
const audio = document.querySelector("audio");
const initialBlackScreenDelay = 60000;

// This is the array of messages that will be displayed in the unknownEntityDialog.
const dialogMessages = [
  { text: "Who are you?", timeout: 0 },
  { text: "...", timeout: 8000 },
  { text: "You don't remember?", timeout: 12000 },
  { text: "... ...", timeout: 16000 },
  { text: "Are you hungry?", timeout: 20000 },
  { text: "... ~~~ ... ~~~ ... ~~~", timeout: 24000 },
  { text: "... It seems we're both hungry.", timeout: 28000 },
  { text: "...", timeout: 32000 }
];

// Game state variables
let initialClickHappened = false;
let animationInProgress = false;
let skipAnimation = false;

// Elements
const unknownEntityImage = document.getElementById("unknownEntityImage");
const unknownEntityDialog = document.getElementById("unknownEntityDialog");
const containerForInitialBlackScreen = document.getElementById("containerForInitialBlackScreen");
const containerForUnknownEntityDialog = document.getElementById("containerForUnknownEntityDialog");

// Variables go here -----------------------------------

// Energy Variables
let energy = 0;
let maxEnergy = 10;

// Resource Variables
let resources = {
    fish: 0,
    clay: 0,
    mud: 0,
    stone: 0,
    shrimp: 0,
}

// Tool Variables
let tools = {
    brokenNet: 0,
    brokenSpoon: 0,
    brokenShell: 0,
}

// Purchased resource Variables
let purchasedResources = {
  fishPerSecond: 0,
  fishPerClick: 1,
}

// Cost of Action Variables
let searchActionCost = 10

// Functions go here -----------------------------------

// Play and Pause Audio functions
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function showMessages(message, timeout) {
  setTimeout(function() {
    unknownEntityDialog.innerText = message;
  }, timeout);
}

function hideElements() {
  unknownEntityImage.classList.add("hidden");
  containerForUnknownEntityDialog.classList.add("hidden");
}

function showElements() {
  unknownEntityImage.classList.remove("hidden");
  containerForUnknownEntityDialog.classList.remove("hidden");
}

function handleClick() {
  if (!initialClickHappened) {
    initialClickHappened = true;
    clickToStart.classList.add("hidden");
    containerForInitialText.classList.add("hidden");
    playAudio();
    showElements(); // Show elements after the initial click
    currentMessageIndex = 0; // Starts at index 1 after initializing gameplay

    // This will activate dialogMessages inside unknownEntityDialog
    dialogMessages.forEach((message, index) => {
      showMessages(message.text, message.timeout);
    });
      //Remove click listener to prevent multiple clicks
      clickToStart.removeEventListener("click", handleClick);
    } else {
    // do nothing
  }
}

function startGame() {

  // Wait for a click to start the game
  // If the user has not clicked yet, nothing will happen
  clickToStart.addEventListener("click", handleClick, { once: true });

  // Hide elements after the dialog and images are shown
  setTimeout(function () {
    hideElements();
    containerForInitialBlackScreen.classList.add("hidden");
    changeImages();
    pauseAudio();
  },initialBlackScreenDelay);
}

//Hide elements before the function startGame is called.
hideElements();

// This hides the elements before the function startGame is called.
if (hideElements()) {
  console.log("Elements hidden");
}

// This starts the game when the page loads.
startGame();

// Function to update resource display in the HTML
function updateResourceDisplay() {
  document.getElementById("showEnergy").innerText = energy;
  document.getElementById("showFish").innerText = resources.fish;
  document.getElementById("showClay").innerText = resources.clay;
  document.getElementById("showMud").innerText = resources.mud;
  document.getElementById("showStone").innerText = resources.stone;
  document.getElementById("showShrimp").innerText = resources.shrimp;
}

// Create a function that changes multiple img elements to new img elements
// if player clicks on spawnPoolLocationButton the currentBackgroundImage and currentButtonImage will change to saltwaterAreaBackground and saltwaterAreaFishClickerButton
// if player clicks on swampLocationButton the currentBackgroundImage and currentButtonImage will change to swampAreaBackground and swampAreaClickerButton
function changeImages() {
  let currentBackgroundImage = document.getElementById("currentBackgroundImage");
  let currentButtonImage = document.getElementById("currentButtonImage");
  let spawningPoolLocationButton = document.getElementById("spawningPoolLocationButton");
  let swampLocationButton = document.getElementById("swampLocationButton");

  // Commented out the code below because it was not working.
  //spawningPoolLocationButton.addEventListener("click", function() {
  //  currentBackgroundImage.src = "Images/Backgrounds/saltwaterAreaBackground.png";
  //  currentButtonImage.src = "Images/Buttons/saltwaterAreaFishClickerButton.png";
  //});

  //swampLocationButton.addEventListener("click", function() {
  //  currentBackgroundImage.src = "Images/Backgrounds/swampAreaBackground.png";
  //  currentButtonImage.src = "Images/Buttons/swampAreaClickerButton.png";
  //});
}



function updateEnergyBar() {;
  const energyPercentage = (energy / maxEnergy) * 100;
  anime({
    targets: "#energyBar",
    width: `${energyPercentage}%`,
    easing: "linear",
    duration: 1000,
  });
}

function playEnergyAnimation(currentEnergy, relativeWidthChange) {
  const targetEnergyPercentage = currentEnergy + relativeWidthChange;
  const absoluteEnergyChange = Math.abs(targetEnergyPercentage - currentEnergy);
  const getDuration = (energyChange) => {
    // ...
  };

  anime({
    targets: "#energyBar",
    width: `+=${relativeWidthChange}%`,
    duration: getDuration(absoluteEnergyChange),
    easing: "linear",
    update: () => {
      updateEnergyBar();
    },
  });
}

// Function to increase energy
function increaseEnergy() {
  if (energy < maxEnergy) {
    energy++;
    updateResourceDisplay();
    updateEnergyBar();
  }
}

// Function to eat a fish and update energy
function eatFish() {
  if (animationInProgress) {
    console.log("Animation in progress");
    return;
  }

  if (resources.fish >= 1) {
    if (energy >= maxEnergy) {
      console.log("You're no longer hungry.");
    } else {
      resources.fish--;
      increaseEnergy();
      playEnergyAnimation();
      console.log("You ate a fish.");
      updateResourceDisplay();
    }
  } else {
    console.log("You have no fish to eat.");
  }
}

// Function eatAction
// This function will check what type of food the player has.
// If the player has fish it will call the eatFish function.
// If the player has shrimp it will call the eatShrimp function.
// If the player has no food it will display a message that says "You have no food to eat."
function eatAction() {
  if (resources.fish >= 1) {
    eatFish();
  } else if (resources.shrimp >= 1) {
    eatShrimp();
  } else {
    console.log("You have no food to eat.");
  }
}

// Function that gets called when you click the saltwaterAreaFishClickerButton (currentButtonImage)
function increment() {
  resources.fish += purchasedResources.fishPerClick; // adds the number of fish per click to your total fish
  updateResourceDisplay(); // Uses the Document Object Model to change the number of fish in the HTML
  displayFishImage(); // Calls the displayFishImage function

  if (resources.fish >= 100000) {
    document.getElementById("gameOver").innerText = "You win the game! for now..."
  }
}

// This function is used to display an image in the containerForResourceIndicator each time the saltwaterAreaFishClickerButton (currentButtonImage) is pressed.
// The image will be randomly selected from the Images/Resources/saltwaterFish/fish folder of 6 images. 
// The class fishImage has a CSS
// The containerForResourceIndicator appears inside the saltwaterAreaFishClickerButton (currentButtonImage) CSS width and height at random places.
// The fishImage will be displayed in the containerForResourceIndicator CSS width and height.
// The fishImage needs to be removed after a few seconds.
function displayFishImage() {
  let fishImage = document.createElement("img");
  fishImage.src = "Images/Resources/saltwaterFish/fish" + Math.floor(Math.random() * 6) + ".png";
  fishImage.classList.add("fishImage");
  document.getElementById("containerForResourceIndicator").appendChild(fishImage);
  fishImage.style.left = Math.floor(Math.random() * 100) + "%";
  fishImage.style.top = Math.floor(Math.random() * 100) + "%";

  //Remove the fish image after a few seconds
  setTimeout(function() {
    fishImage.remove();
  }, 3000);
}

// Function that happens every second. This adds the number of fish per second to your total fish and updates the HTML every second.
setInterval(function() {
  resources.fish += purchasedResources.fishPerSecond; //adds the number of fish per second to your total fish
  updateResourceDisplay(); // Use this when you want to update your HTML
}, 1000); // Every 1000 milliseconds

// Function that will be called when the user presses the buyActionButton.
// This function will check if the player has enough energy to do this action.
// If the player has enough energy it will subtract the cost of the action from the players energy.
// It will also update showEnergy in the HTML.
// It will also call the searchAction function.
function buyAction() {
  if (energy >= searchActionCost) {
    energy -= searchActionCost;
    updateResourceDisplay();
    searchAction();
  } else {
    console.log("You do not have enough energy to do this action.");
  }
}

function buySearchAction() {
  if (energy >= searchActionCost) {
    energy -= searchActionCost;
    updateResourceDisplay();
    updateEnergyBar()
    searchAction();
  }
}

// This is the searchAction function.
// This function will choose 1 of 4 actions to give the player based on percent chance.
// It can spawn a resource cache at a 40% chance.
// It can spawn a narrator that gives lore about the area at 20% chance.
// It can spawn a stranger or creature at a 30% chance.
// It can spawn a weird object at a 10% chance.
function searchAction() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.4) {
    resourceCache();
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

// This is the function for the narrator.
// The narrator will give lore about the current area.
// The messages will be stored in the adventures log.
// The lore will be displayed as messages in the adventures log.
// The messages will be chosen at random per area.
// The messages will be chosen at random per action.
function narrator() {
  let narratorMessage = document.createElement("p");
  narratorMessage.innerText = "You found a resource cache!";
  narratorMessage.classList.add("narratorMessage");
  document.getElementById("containerForNarratorMessage").appendChild(narratorMessage);
  setTimeout(function() {
    narratorMessage.remove();
  }, 3000);
}

// This is the function for the stranger or creature.
// The stranger or creature will give the player a choice of doing a quest, fighting, or trading. 

// This is the function for the weird object.
// The weird object will give the player a choice of interacting with it or leaving it alone.

// This is the resourceCache function.
// This function will choose a resource cache at random from 5 images.
// This function will place those resources in a image called resourceCacheImage.
// The resourceCacheImage is held in the containerForResourceCacheImage HTML Div.
// The containerForResourceCacheImage appear in random places on the screen.
// The resourceCacheImage will be clickable.
// When players click on the resourceCacheImage a message will appear above the cache that says "You found a resource cache!".
// When players click on the resourceCacheImage it will disappear and the resources will be added to the players inventory.
// The resources a player can get from this area is clay, mud, and stone.
// The amount of resources the player gets will be randomized. 
// The player can get 1-3 clay, 1-4 mud, and 1-3 stone.
function resourceCache() {
  let resourceCacheImage = document.createElement("img");
  resourceCacheImage.src = "Images/Resources/levelOneSaltwaterResourceCache/resourceCache" + Math.floor(Math.random() * 5) + ".png";
  resourceCacheImage.classList.add("resourceCacheImage");
  document.getElementById("containerForResourceCacheImage").appendChild(resourceCacheImage);
  resourceCacheImage.style.left = Math.floor(Math.random() * 100) + "%";
  resourceCacheImage.style.top = Math.floor(Math.random() * 100) + "%";
  resourceCacheImage.addEventListener("click", function() {
    resourceCacheImage.remove();
    let clay = Math.floor(Math.random() * 3) + 1;
    let mud = Math.floor(Math.random() * 4) + 1;
    let stone = Math.floor(Math.random() * 3) + 1;
    resources.clay += clay;
    resources.mud += mud;
    resources.stone += stone;
    updateResourceDisplay();
    let resourceCacheMessage = document.createElement("p");
    resourceCacheMessage.innerText = "You found a resource cache!";
    resourceCacheMessage.classList.add("resourceCacheMessage");
    document.getElementById("containerForResourceCacheImage").appendChild(resourceCacheMessage);
    setTimeout(function() {
      resourceCacheMessage.remove();
    }, 3000);
  });
}

// This is the function for fishingInsightAction.
// This function will check if the player has enough fish to buy the fishingInsightAction.
// If the player has enough fish it will subtract the cost of the action from the players fish.
// It will also update showFish in the HTML.
// It will also call the fishingInsight function.
// If the player does not have enough fish it will display a message that says "You do not have enough fish."
// The fishingInsightAction will cost 10 fish for each attempt.
// each attempt will give the player a chance to learn a new fishing insight.
// The fishing insights the player can learn are in an array.
// The fishing insights each have a percent chance to be learned.
// Common insights have a 50% chance to be learned.
// Uncommon insights have a 30% chance to be learned.
// Rare insights have a 13% chance to be learned.
// Epic insights have a 4% chance to be learned.
// Legendary insights have a 2% chance to be learned.
// Bizare insights have a 1% chance to be learned.
// if learned, the fishing insight will be added to the bestiary expertise section.
function fishingInsightAction() {
  if (resources.fish >= 10) {
    resources.fish -= 10;
    updateResourceDisplay();
    fishingInsight();
  } else {
    console.log("You do not have enough fish.");
  }
}

var button = document.getElementById('spawningPoolLocationButton');
var tooltip = document.querySelector('.containerForTooltip');

button.addEventListener('mouseover', function() {
  tooltip.style.display = 'flex';
});

button.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

// A function to make a button toggle the visibility of a container.
function toggleContainerVisibility(containerId) {
  // Get the container element.
  var containerElement = document.getElementById(containerId);
  
  // Check if the container element exists.
  if (containerElement) {
    // Toggle the 'hidden' class.
    containerElement.classList.toggle('hidden');

    // If 'hidden' class is not present, add the 'opened' class.
    // Otherwise, remove the 'opened' class.
    containerElement.classList.contains('hidden')
      ? containerElement.classList.remove('opened')
      : containerElement.classList.add('opened');
  } else {
    // Log an error message if the container element is not found.
    console.log('Container element not found.', containerId);
  }
}    

// A function to hide containers when the page loads.
function hideContainer(containerId) {
  document.getElementById(containerId).classList.add('hidden');
}

// A function to toggle the visibility of a container.
function addToggleVisibilityListener(buttonId, containerId) {
  document.getElementById(buttonId).addEventListener('click', function() {
    toggleContainerVisibility(containerId);
    console.log(`${containerId} loaded`);
  });
}

// Event Listeners go here -----------------------------------

// Event listener for hiding containers when the page loads.
window.addEventListener('DOMContentLoaded', function() {
  hideContainer('containerForInventory');
  hideContainer('containerForLocationMenu');
  hideContainer('bestiaryContainer');
  hideContainer('containerForActionsMenu');
  hideContainer('containerForInsightsMenu');

// Event listener to toggleContainerVisibility when playerInventoryMenuButton is clicked.
  addToggleVisibilityListener('playerInventoryMenuButton', 'containerForInventory');

// Event listener to toggleContainerVisibility when containerForLocationMenu is clicked.
  addToggleVisibilityListener('locationMenuButton', 'containerForLocationMenu');

// Event listener to toggleContainerVisibility when bestiaryBookMenuButton is clicked.
  addToggleVisibilityListener('bestiaryBookMenuButton', 'bestiaryContainer');

// Event listener to toggleContainerVisibility when actionsMenuButton is clicked.
  addToggleVisibilityListener('actionsMenuButton', 'containerForActionsMenu');

// Event listener to toggleContainerVisibility when insightsMenuButton is clicked.
  addToggleVisibilityListener('insightsMenuButton', 'containerForInsightsMenu');

// Event listener to toggleContainerVisibility when bestiaryCreatureTypeButton is clicked.
  addToggleVisibilityListener('bestiaryCreatureTypeButton', 'bestiaryCreatureTypeContainer');
});
