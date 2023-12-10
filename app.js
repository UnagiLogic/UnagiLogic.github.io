// Const that don't need to change go here

// Variables go here -----------------------------------

// Energy Variables
let energy = 10;
let maxEnergy = 10;


// Resource Variables
let resources = {
    fish: 0,
    clay: 0,
    mud: 0,
    stone: 0,
    shrimp: 0,
}

// Purchased resource Variables
let purchasedResources = {
  fishPerSecond: 0,
  fishPerClick: 1,
}

// Cost of Action Variables
let searchActionCost = 10

// Functions go here -----------------------------------

// Function to update resource display in the HTML
function updateResourceDisplay() {
  document.getElementById("showEnergy").innerText = energy;
  document.getElementById("showFish").innerText = resources.fish;
  document.getElementById("showClay").innerText = resources.clay;
  document.getElementById("showMud").innerText = resources.mud;
  document.getElementById("showStone").innerText = resources.stone;
  document.getElementById("showShrimp").innerText = resources.shrimp;
}

// This function will increase energy until energy is equal to maxEnergy.
// It increases energy by 1 every second.
// It will update the energy in the HTML
// It will call the playEnergyAnimation function.
function increaseEnergy() {
  let energyIncrease = setInterval(function() {
    if (energy < maxEnergy || document.getElementById("energyBar").classList.contains("energyBarAnimation")) {
      energy++;
      updateResourceDisplay();
      if (energy === maxEnergy) {
        document.getElementById("energyBar").classList.remove("energyBarAnimation");
      }
      playEnergyAnimation();
    } else {
      clearInterval(energyIncrease);
    }
  }, 1000);
}

// Every time the energy increases it will play the energyBarAnimation.
// The energyBarAnimation will be added to the energyBar.
// The energyBarAnimation will stop when energy is equal to maxEnergy.
function playEnergyAnimation() {
  const energyPercentage = (energy / maxEnergy) * 100;
  const remainingTime = 1 - energyPercentage;
document.getElementById("energyBar").classList.add("energyBarAnimation");
document.getElementById("energyBar").style.animationDuration = `${remainingTime}s`;
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
// It will call the increaseEnergy function to make sure the players energy is recovering after doing this action.
// ensure players energy is recovering after doing this action.
function buySearchAction() {
  if (energy >= searchActionCost) {
    energy -= searchActionCost;
    updateResourceDisplay();
    searchAction();
    increaseEnergy();
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
