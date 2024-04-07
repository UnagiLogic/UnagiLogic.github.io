// This is where the clickers are defined
// This is the clickers module
// It contains the clicker functions for the game
// It exports the clicker functions to app.js

// Resource Variables
let resources = {
    fish: 0,
    clay: 0,
    mud: 0,
    stone: 0,
    shrimp: 0,
}

// Function to update the resource display
// Function to update resource display in the HTML
export function updateResourceDisplay() {
    document.getElementById("showEnergy").innerText = energy;
    document.getElementById("showFish").innerText = resources.fish;
    document.getElementById("showLocationFish").innerText = resources.fish;
    document.getElementById("showClay").innerText = resources.clay;
    document.getElementById("showLocationClay").innerText = resources.clay;
    document.getElementById("showMud").innerText = resources.mud;
    document.getElementById("showLocationMud").innerText = resources.mud;
    document.getElementById("showStone").innerText = resources.stone;
    document.getElementById("showLocationStone").innerText = resources.stone;
    document.getElementById("showShrimp").innerText = resources.shrimp;
    document.getElementById("showLocationShrimp").innerText = resources.shrimp;
  }


// Clicker Functions go here -----------------------------------

// Fish Clicker
export function incrementFish() {
    resources.fish += 1;
    updateResourceDisplay();
    displayFishImage();
    console.log(resources.fish);
}



// Clicker function addons go here -----------------------------------

// This function is used to display an image in the containerForResourceIndicator each time the saltwaterAreaFishClickerButton (currentLocationButtonImage) is pressed.
// The image will be randomly selected from the Images/Resources/saltwaterFish/fish folder of 6 images. 
// The class fishImage has a CSS
// The containerForResourceIndicator appears inside the saltwaterAreaFishClickerButton (currentLocationButtonImage) CSS width and height at random places.
// The fishImage will be displayed in the containerForResourceIndicator CSS width and height.
// The fishImage needs to be removed after a few seconds.
export function displayFishImage() {
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
  