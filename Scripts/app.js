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
console.log(buttons); // Check if buttons is defined and is a NodeList

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('button clicked'); // Check if button is clicked
        
        let containerName = button.getAttribute('data-container');
        console.log(containerName); // Check if containerName is correct
        
        let container = document.getElementById(containerName);
        console.log(container); // Check if container is correct

        toggleDisplay(container);
        console.log('container toggled'); // Check if container is toggled
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