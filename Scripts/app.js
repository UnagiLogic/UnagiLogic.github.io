import { sayHelloAgain } from './splash-screen.js';
import { toggleDisplay, toggleVisibility, button, container } from './common.js';
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

button.addEventListener('click', function() {
    toggleDisplay(container);
});


// create a function that says hello on the screen

function sayHello() {
    console.log('Hello');
}

// call function sayHello
sayHello();
sayHelloAgain();