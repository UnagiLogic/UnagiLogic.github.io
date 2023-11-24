// Variables that don't need to change go here


// Variable that need to change go here

// Resource Variables
let fish = 0;
let clay = 0;
let mud = 0;

let fishPerSecond = 0;
let fishPerClick = 1;

// Cost of Action Variables
let searchActionCost = 10

// Add load EventListeners here


// Functions go here -----------------------------------

// Function that gets called when you click the clickButton
function increment() {
    fish += fishPerClick; // adds the number of fish per click to your total fish
    document.getElementById("showFish").innerText = fish; // Uses the Document Object Model to change the number of fish in the HTML

    if (fish >= 100000) {
        document.getElementById("gameOver").innerText = "You win the game! for now..."
    } 
}

// Function that happens every second
setInterval(function() {
    fish += fishPerSecond; //adds the number of fish per second to your total fish
    document.getElementById("showFish").innerText = fish; // Use this when you want to update your HTML
}, 1000) // Every 1000 milliseconds

// Function that will be called when the user presses the buyActionButton
function buySearchAction() {
    if (fish >= searchActionCost) { //Checks if you have enough fish
        fish -= searchActionCost; // This subtracts the fish at cost value
        document.getElementById("showFish").innerText = fish; // Use this when you want to update your HTML
        
        clay++;
        mud++;
        document.getElementById("showClay").innerText = clay;
        document.getElementById("showMud").innerText = mud;
    }
}

// A function to make a button toggle the inventory in view and out of view for the player.
function toggleInventoryContainerVisibility() {
    var containerElement = document.getElementById('containerForInventory');
    containerElement.classList.toggle('hidden');
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inventoryButton').addEventListener('click', toggleInventoryContainerVisibility);
  });

// A Toggle for the Bestiary Book
  function toggleBestiaryContainerVisibility() {
    var containerElement2 = document.getElementById('bestiaryContainer');
    containerElement2.classList.toggle('hidden');
}

  window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bestiaryButton').addEventListener('click', toggleBestiaryContainerVisibility);
    console.log("Bestiary Loaded")
  });