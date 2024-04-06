import { sayHelloAgain } from './splash-screen.js';
import { toggleDisplay, button, container, container2 } from './common.js';
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
    toggleDisplay(container2);
});


// create a function that says hello on the screen

function sayHello() {
    console.log('Hello');
}

// call function sayHello
sayHello();
sayHelloAgain();