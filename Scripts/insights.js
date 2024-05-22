
// The is the function for gaining fishing insight.
// This function will check if the player has enough fish to buy the fishingInsightAction.
// This function will check if the player has enough energy to buy the fishingInsightAction.
// If the player has enough fish and energy it will subtract the cost of the action from the players fish.
// It will also update the Resource Display.
// It will also update the Energy Bar.
// It will also call the fishingInsight function.
// It will also call the floatFishingInsightCostNumber function.
// If the player does not have enough fish it will display a message that says "You do not have enough fish."
// If the player does not have enough energy it will display a message that says "You do not have enough energy."
export function gainFishingInsight(resources, setResources, energy, setEnergy, updateEnergyBar) {
  console.log("Initial resources:", resources);
  console.log("Inside gainFishingInsight, resources:", resources);  
  if (resources.fish >= 10 && energy >= 1) {
      setResources((prevResources) => ({
        ...prevResources,
        fish: prevResources.fish - 10,
      }));
      setEnergy(energy - 1);
      
      updateEnergyBar();
      floatFishingInsightCostNumber();
      fishingInsight();
    } else if (resources.fish < 10) {
      console.log("You do not have enough fish.");
    } else {
      console.log("You do not have enough energy.");
    }
  }



// Create a function that floats the cost of the fishing insight action on the screen
// This function will create a p element with a number inside it.
// The number represents the cost of the fishing insight action.
// The number will float on the screen for a few seconds.
// The number will disappear after a few seconds.
// The number will be placed next to the button that was clicked.
function floatFishingInsightCostNumber() {
  let number = document.createElement("p");
  number.innerText = "-10";
  number.classList.add("floatingNumber");
  document.getElementById("containerForNumber").appendChild(number);
  setTimeout(function() {
    number.remove();
  }, 3000);
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
function fishingInsight() {
  let fishingInsights = [
    { name: "Common Insight", chance: 0.5 },
    { name: "Uncommon Insight", chance: 0.3 },
    { name: "Rare Insight", chance: 0.13 },
    { name: "Epic Insight", chance: 0.04 },
    { name: "Legendary Insight", chance: 0.02 },
    { name: "Bizare Insight", chance: 0.01 },
  ];
  let randomNumber = Math.random();
  for (let i = 0; i < fishingInsights.length; i++) {
    if (randomNumber <= fishingInsights[i].chance) {
      console.log("You learned a new fishing insight!");
      let fishingInsightMessage = document.createElement("p");
      fishingInsightMessage.innerText = "You learned a new fishing insight!";
      fishingInsightMessage.classList.add("fishingInsightMessage");
      document.getElementById("containerForFishingInsightMessage").appendChild(fishingInsightMessage);
      setTimeout(function() {
        fishingInsightMessage.remove();
      }, 3000);
      break;
    }
  }
}