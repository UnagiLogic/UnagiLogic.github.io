// Variables that don't need to change go here


// Variable that need to change go here

// Fish Variables
let fish = 0;
let fishPerSecond = 0;
let fishPerClick = 1;

// Cost of Action Variables
let searchActionCost = 10

// Keeps track of how many items the players have
let itemMud = 0;
let itemClay = 0;

// Any load EventListeners go here


// functions go here -----------------------------------

// Function that gets called when you click the clickButton
function increment() {
    fish += fishPerClick; // adds the number of fish per click to your total fish
    document.getElementById("showFish").innerText = fish; // Uses the Document Object Model to change the number of fish in the HTML

    if (fish >= 10000) {
        document.getElementById("gameOver").innerText = "You win the game! for now..."
    } 
}

// Function that happens every second
setInterval(function() {
    fish += fishPerSecond; //adds the number of fish per second to your total fish
    document.getElementById("showFish").innerText = fish; // Use this when you want to update your HTML
}, 1000) // Every 1000 milliseconds

// Function that will be called whne the user presses the buyActionButton
function buySearchAction() {
    if (fish >= searchActionCost) { //Checks if you have enough fish
        fish -= searchActionCost; // This subtracts the fish at cost value
        document.getElementById("showFish").innerText = fish; // Use this when you want to update your HTML
        
        itemClay++;
        itemMud++;
        document.getElementById("itemClayNum").innerText = itemClay;
        document.getElementById("itemMudNum").innerText = itemMud;
    }
}

