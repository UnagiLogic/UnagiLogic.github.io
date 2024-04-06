// This is the common module
// It contains the common functions and constants used by the game

// Constants and configuration




// Game state variables



// Elements



// Variables go here -----------------------------------



// Functions go here -----------------------------------

// Toggles the display of an element with data-container attribute
export function toggleDisplay() {
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
          const container = document.getElementById(button.dataset.container);
          container.classList.toggle('d-none'); // Toggle d-none class
          console.log('Button clicked');
        });
      });
}




// Event Listeners go here -----------------------------------