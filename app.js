// Const that don't need to change go here

// Variables go here -----------------------------------

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
    document.getElementById("showFish").innerText = resources.fish;
    document.getElementById("showClay").innerText = resources.clay;
    document.getElementById("showMud").innerText = resources.mud;
    document.getElementById("showStone").innerText = resources.stone;
    document.getElementById("showShrimp").innerText = resources.shrimp;
}

// Function that gets called when you click the clickButton
function increment() {
  resources.fish += purchasedResources.fishPerClick; // adds the number of fish per click to your total fish
  updateResourceDisplay(); // Uses the Document Object Model to change the number of fish in the HTML
  displayFishImage(); // Calls the displayFishImage function

  if (resources.fish >= 100000) {
    document.getElementById("gameOver").innerText = "You win the game! for now..."
  }
}

// This function is used to display an image each time the saltwaterAreaFishClickerButton is pressed.
// The image will be randomly selected from the images folder. 
// After the image will be displayed in the same area as the CSS foe #saltwaterAreaFishClickerButton. 
// Then the image will float up the screen and disappear after a few seconds.
function displayFishImage() {
  let fishImage = document.createElement("img");
  fishImage.src = "Images/Resources/saltwaterFish" + Math.floor(Math.random() * 6) + ".png";
  fishImage.classList.add("fishImage");
  document.getElementById("saltwaterAreaFishClickerButton").appendChild(fishImage);
  setTimeout(function() {
    fishImage.remove();
  }, 3000);
}

// Function that happens every second
setInterval(function() {
  resources.fish += purchasedResources.fishPerSecond; //adds the number of fish per second to your total fish
  updateResourceDisplay(); // Use this when you want to update your HTML
}, 1000); // Every 1000 milliseconds

// Function that will be called when the user presses the buyActionButton.
// This fucntion will buySearchAction and then choose 1 of 4 actions to give the player based on percent chance. It can spawn a resource cache at a 25% chance, narrator that gives lore about the area at 25% chance, meeting a stranger or creature at a 25% chance, or, identifying a weird object at a 25% chance. The resource cache will give the player different resources based on the area they are in. The narrator will give the player lore about the area they are in. The stranger or creature will give the player a choice of doing a quest, fighting, or trading. The weird object will give the player a choice of interacting with it or leaving it alone.
function buySearchAction() {
  if (resources.fish >= searchActionCost) {
    resources.fish -= searchActionCost;
    updateResourceDisplay();
    let randomAction = Math.random();
    if (randomAction <= 0.25) {
      resourceCache();
      console.log("Resource Cache");
    } else if (randomAction <= 0.5) {
      console.log("Narrator");
    } else if (randomAction <= 0.75) {
      console.log("Stranger or Creature");
    } else {
      console.log("Weird Object");
    }
  }
}

// Function that chooses a resource cache based on the area the player is in. The resource cache will give the player different resources based on the area they are in. The first area Title is called "The Spawning Pool" and it is a level 1 saltwater area. The only resources a player can get from this area in a resource cache is clay, mud, and stone.
// This function will also randomize the amount of resources the player gets from the resource cache. The amount of resources the player gets will be between 1 and 10 total but the amount of each resource will be randomized. The player can get 1-10 clay, 1-10 mud, and 1-10 stone but may not recive more then 10 total resources.
function resourceCache() {
  let resourceCacheRandomizedNumber = Math.floor(Math.random() * 10) + 1;
  console.log(resourceCacheRandomizedNumber);
  let randomResource = Math.random();
  if (randomResource <= 0.33) {
    resources.clay += resourceCacheRandomizedNumber;
    updateResourceDisplay();
  } else if (randomResource <= 0.66) {
    resources.mud += resourceCacheRandomizedNumber;
    updateResourceDisplay();
  } else {
    resources.stone += resourceCacheRandomizedNumber;
    updateResourceDisplay();
  }
}

// A function to make a button toggle the visibility of a container.
function toggleContainerVisibility(containerId) {
  var containerElement = document.getElementById(containerId);
  containerElement.classList.toggle('hidden');
  if (!containerElement.classList.contains('hidden')) {
    containerElement.classList.add('opened');
  } else {
    containerElement.classList.remove('opened');
  }
}

// Event Listeners go here -----------------------------------
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inventoryButton').addEventListener('click', function() {
    toggleContainerVisibility('containerForInventory');
  });

  document.getElementById('bestiaryButton').addEventListener('click', function() {
    toggleContainerVisibility('bestiaryContainer');
    console.log("Bestiary Loaded");
  });
});