// This is the common module
// It contains the common functions and constants used by the game

// Constants and configuration




// Game state variables



// Elements



// Variables go here -----------------------------------
export let button = document.getElementById('toggleButton');
export let container = document.getElementById('inventory-menu');



// Functions go here -----------------------------------

// What do I want the fucntion to do?
// I want the function to check if a container has the visible class.
// If not, I want the function to add the invisible class to the container.
// after adding the invisible class, I want the function to remove the invisible class from the container.
// then, I want the function to add the visible class to the container.


// Create a function to toggle the visibility of a container.
// The function takes a container element as an argument.
// The function checks if the container is visible or hidden.
// If the container is visible, it hides the container.
// If the container is hidden, it shows the container.
// The function should be exported so it can be used in other modules.
// The function should be called toggleVisibility.
// The function should use and add bootstaps visible and invisible classes to the container.
// The function should use the container's classList property to add or remove the classes.
// The function should use an if statement to check if the container is visible or hidden.
// The function should use the classList property to add or remove the visible and invisible classes.
// The function should use the add method to add the visible class to the container.
// The function should use the remove method to remove the invisible class from the container.
// The function should check if the container has the visible class.
// The function should check if the container has the invisible class.
// The function should 

export function toggleVisibility(container) {
    if (container.classList.contains('visible')) {
        container.classList.remove('visible');
        container.classList.add('invisible');
    } else if (container.classList.contains('invisible')){
        container.classList.remove('invisible');
        container.classList.add('visible');
    // Needs to check if the container has the visible or invisible class
    // if not, it should add the visible class to the container
    } else {
        container.classList.add('visible');
    }
}




// Event Listeners go here -----------------------------------