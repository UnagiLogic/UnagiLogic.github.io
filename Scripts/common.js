// This is the common module
// It contains the common functions and constants used by the game

// Constants and configuration




// Game state variables



// Elements



// Variables go here -----------------------------------
export let button = document.getElementById('toggleButton');
export let container = document.getElementById('inventory-menu');



// Functions go here -----------------------------------

// Create a function to toggle the visibility of a container.
// The function takes a container element as an argument.
// The function checks if the container is visible or hidden.
// If the container is visible, it hides the container.
// If the container is hidden, it shows the container.
// The function should be exported so it can be used in other modules.
// The function should be called toggleVisibility.
// The function should use and add bootstaps visible and invisible classes to the container.
// The function should use the container's classList property to add or remove the classes.

export function toggleVisibility(container) {
    if (container.classList.contains('visible')) {
        container.classList.remove('visible');
        container.classList.add('invisible');
    } else {
        container.classList.remove('invisible');
        container.classList.add('visible');
    }
}




// Event Listeners go here -----------------------------------