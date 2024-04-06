import { sayHelloAgain } from './splash-screen.js';
import { toggleDisplay, button, buttons, containers, container, container2 } from './common.js';
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

// This check if buttons with .toggle-button class are clicked
// If they are clicked, it toggles the corresponding container
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let containerName = button.getAttribute('data-container');
        console.log(containerName);
        
        let container = document.getElementById(containerName);
        console.log(container);

        toggleDisplay(container);
        console.log('button clicked');
    });
});

//button.addEventListener('click', function() {
//    toggleDisplay(container);
//    toggleDisplay(container2);
//});


// create a function that says hello on the screen

function sayHello() {
    console.log('Hello');
}

// call function sayHello
sayHello();
sayHelloAgain();