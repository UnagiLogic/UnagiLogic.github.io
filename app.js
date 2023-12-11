// Const that don't need to change go here

// This holds the audio for the start of the game.
const audio = document.querySelector("audio");

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

// Animation Variables
let animationInProgress = false;

// Purchased resource Variables
let purchasedResources = {
  fishPerSecond: 0,
  fishPerClick: 1,
}

// Cost of Action Variables
let searchActionCost = 10

// Functions go here -----------------------------------

// Play audio
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

// This is the startGame function.
// as the game starts, the screen will start out black.
// while the screen is black, a message appears that says "Who are you?"
// after a few seconds, another message appears that says "..."
// after a few seconds, another message appars that says "You don't remember?"
// after a few more seconds, another message appears that says "... ..."
// after a few more seconds, another message appears that says "Are you hungry?"
// after a few more seconds, another message appears that says "... ~~~ ... ~~~ ... ~~~"
// after a few more seconds, another message appears that says "Looks like it. Let's catch some fish."
// after a few more seconds, the screen fades to The Spawning Pool Scene.

// function startGame() {
//   let startGameMessage = document.createElement("p");
//   startGameMessage.innerText = "Who are you?";
//   startGameMessage.classList.add("startGameMessage");
//   document.getElementById("containerForStartGameMessage").appendChild(startGameMessage);
//   setTimeout(function() {
//     startGameMessage.remove();
//   }, 3000);
// }

// This function controls the unknown entity dialog.
// Hide #unknownEntityImage to start.
// Don't start the dialog until the user clicks the screen once.
// after screen is clicked, play audio
// after audio has played for 4 seconds, unhide the #unknownEntityImage
// The narrative will start out in p id="unknownEntityDialog"
// The narrative will start out with a message that says "Who are you?"
// The narrative will pause for a few seconds and then another message will appear that says "..."
// The narrative will pause for a few seconds and then another message will appear that says "You don't remember?"
// The narrative will pause for a few seconds and then another message will appear that says "... ..."
// The narrative will pause for a few seconds and then another message will appear that says "Are you hungry?"
// The narrative will pause for a few seconds and then another message will appear that says "... ~~~ ... ~~~ ... ~~~"
// The narrative will pause for a few seconds and then another message will appear that says "... It seems we're both hungry."
// The narrative will go silent.

function unknownEntityDialog() {
  let unknownEntityDialogMessage = document.getElementById("unknownEntityDialog");
  let unknownEntityImage = document.getElementById("unknownEntityImage");
  const containerForUnknownEntityDialog = document.getElementById("containerForUnknownEntityDialog");
  const containerForInitialBlackScreen = document.getElementById("containerForInitialBlackScreen");

  // Hide elements initially
  unknownEntityImage.classList.add("hidden");
  containerForUnknownEntityDialog.classList.add("hidden");

  // Wait here until player clicks the screen
  document.addEventListener("click", function() {
    // Unhide elements
    unknownEntityImage.classList.remove("hidden");
    containerForUnknownEntityDialog.classList.remove("hidden");
    
    // Play audio after user interaction
    playAudio();

    function showMessage(message, timeout) {
    setTimeout(function() {
      unknownEntityDialogMessage.innerText = message;
    }, timeout);
  });
  

  // Dialog progression
  showMessage("Who are you?", 0);
  showMessage("...", 8000);
  showMessage("You don't remember?", 12000);
  showMessage("... ...", 16000);
  showMessage("Are you hungry?", 20000);
  showMessage("... ~~~ ... ~~~ ... ~~~", 24000);
  showMessage("... It seems we're both hungry.", 28000);
  showMessage("...", 32000);

  //Hide elements after dialog
  setTimeout(function() {
    containerForUnknownEntityDialog.classList.add("hidden");
    unknownEntityImage.classList.add("hidden");
    containerForInitialBlackScreen.classList.add("hidden");

    // Pause audio
    pauseAudio();
  }, 36000);
}

// Function to update resource display in the HTML
function updateResourceDisplay() {
  document.getElementById("showEnergy").innerText = energy;
  document.getElementById("showFish").innerText = resources.fish;
  document.getElementById("showClay").innerText = resources.clay;
  document.getElementById("showMud").innerText = resources.mud;
  document.getElementById("showStone").innerText = resources.stone;
  document.getElementById("showShrimp").innerText = resources.shrimp;
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

// Function that gets called when you click the saltwaterAreaFishClickerButton
function increment() {
  resources.fish += purchasedResources.fishPerClick; // adds the number of fish per click to your total fish
  updateResourceDisplay(); // Uses the Document Object Model to change the number of fish in the HTML
  displayFishImage(); // Calls the displayFishImage function

  if (resources.fish >= 100000) {
    document.getElementById("gameOver").innerText = "You win the game! for now..."
  }
}

// This function is used to display an image in the containerForResourceIndicator each time the saltwaterAreaFishClickerButton is pressed.
// The image will be randomly selected from the Images/Resources/saltwaterFish/fish folder of 6 images. 
// The class fishImage has a CSS
// The containerForResourceIndicator appears inside the saltwaterAreaFishClickerButton CSS width and height at random places.
// The fishImage will be displayed in the containerForResourceIndicator CSS width and height.
// The fishImage needs to be removed after a few seconds.
function displayFishImage() {
  let fishImage = document.createElement("img");
  fishImage.src = "Images/Resources/saltwaterFish/fish" + Math.floor(Math.random() * 6) + ".png";
  fishImage.classList.add("fishImage");
  document.getElementById("containerForResourceIndicator").appendChild(fishImage);
  fishImage.style.left = Math.floor(Math.random() * 100) + "%";
  fishImage.style.top = Math.floor(Math.random() * 100) + "%";
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

// A function to make a button toggle the visibility of a container.
function toggleContainerVisibility(containerId) {
  var containerElement = document.getElementById(containerId);
  if (containerElement) {
    containerElement.classList.toggle('hidden');
    if (!containerElement.classList.contains('hidden')) {
      containerElement.classList.add('opened');
    } else {
      containerElement.classList.remove('opened');
    }
  } else {
    console.log('Container element not found.', containerId);
  }
}    

// A function to make the bestiaryContainer hidden when the page loads.
function hideBestiaryContainer() {
  document.getElementById('bestiaryContainer').classList.add('hidden');
}

// Event Listeners go here -----------------------------------

// Event listener for unknownEntityDialog() when the page loads.
window.addEventListener('DOMContentLoaded', unknownEntityDialog);

// Event listener for hiding the bestiaryContainer when the page loads.
window.addEventListener('DOMContentLoaded', hideBestiaryContainer);

// Event listener for hiding the containerForInventory when the page loads.
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('containerForInventory').classList.add('hidden');
});

// Event listener for hiding the containerForActionsMenu when the page loads.
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('containerForActionsMenu').classList.add('hidden');
});

// Event listener for toggleContainerVisibility for the inventoryButton.
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inventoryButton').addEventListener('click', function() {
    toggleContainerVisibility('containerForInventory');
  });

  document.getElementById('bestiaryButton').addEventListener('click', function() {
    toggleContainerVisibility('bestiaryContainer');
    console.log("Bestiary Loaded");
  });

// Event listener for when actionsMenuButton is clicked toggleContainerVisibility for containerForActionsMenu.
  document.getElementById('actionsMenuButton').addEventListener('click', function() {
  toggleContainerVisibility('containerForActionsMenu');
  console.log("Actions Menu Loaded");
  });
});
