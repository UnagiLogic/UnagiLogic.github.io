// Const that don't need to change go here

// Variables go here -----------------------------------

// Resource Variables
let resources = {
    fish: 0,
    clay: 0,
    mud: 0,
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
    document.getElementById("showFish").innerText = fish;
    document.getElementById("showClay").innerText = clay;
    document.getElementById("showMud").innerText = mud;
}

// Function that gets called when you click the clickButton
function increment() {
  resources.fish += fishPerClick; // adds the number of fish per click to your total fish
  updateResourceDisplay(); // Uses the Document Object Model to change the number of fish in the HTML

  if (resources.fish >= 100000) {
    document.getElementById("gameOver").innerText = "You win the game! for now..."
  }
}

// Function that happens every second
setInterval(function() {
  resources.fish += purchasedResources.fishPerSecond; //adds the number of fish per second to your total fish
  updateResourceDisplay(); // Use this when you want to update your HTML
}, 1000); // Every 1000 milliseconds

// Function that will be called when the user presses the buyActionButton
function buySearchAction() {
  if (resources.fish >= searchActionCost) { //Checks if you have enough fish
    resources.fish -= searchActionCost; // This subtracts the fish at cost value
    updateResourceDisplay(); // Use this when you want to update your HTML
    
    resources.clay++;
    resources.mud++;
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