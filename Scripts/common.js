// This is the common module
// It contains the common functions and constants used by the game

// Constants and configuration




// Game state variables



// Elements



// Variables go here -----------------------------------
export let button = document.getElementById('toggleButton');
export let container = document.getElementById('splash-screen');
export let container2 = document.getElementById('inventory-menu');

//This is an array of clickable buttons that can have their display toggled
export let buttons = document.querySelectorAll('.toggle-button');

//This is an array of containers that can have their display toggled
export let containers = document.querySelectorAll('.toggle-container');


// Functions go here -----------------------------------

// What do I want the function to do?


// What do I want the fucntion to do?
// Create a function called toggleDisplay
// this function first checks if the container has the class d-none.
// if it does, it removes the class d-none.
// if it doesn't, it adds the class d-none.
export function toggleDisplay(container) {
    if (container.classList.contains('d-none')) {
        container.classList.remove('d-none');
    } else {
        container.classList.add('d-none');
    }
}




// Event Listeners go here -----------------------------------