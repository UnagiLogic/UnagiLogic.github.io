import { sayHelloAgain } from './splash-screen.js';
import { toggleDisplay } from './common.js';
import { updateResourceDisplay, incrementFish, displayFishImage } from './clickers.js';
//create a function that checks if gameState is in the splash screen state
//if it is, call splashScreen
//if it is not, do nothing

//function checkGameState() {
//    if (gameState.currentState === gameConstants.GAME_STATE.SPLASH_SCREEN) {
//        splashScreen();
//    }
//} else {
//    return;
//}

// Order of function calls go here -----------------------------------

updateResourceDisplay();
displayFishImage();

// This adds an event listener to the currentLocationButtonImage 
// which calls the incrementFish function when clicked.
const image = document.getElementById("currentLocationButtonImage");
image.addEventListener("click", incrementFish);

sayHelloAgain();
toggleDisplay();

// End of order of function calls -----------------------------------
