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


document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const container = document.getElementById(button.dataset.container);
      container.classList.toggle('d-none'); // Toggle d-none class
      console.log('Button clicked');
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