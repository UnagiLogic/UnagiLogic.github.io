// This is the initial screen that the user sees when they open the app. 
// It contains the logo and the login button.


// Constants and configuration
const clickToStart = document.getElementById("clickToStart");
const audio = document.querySelector("audio");

// Variables go here -----------------------------------
let currentMessageIndex = 0;

// This is the array of messages that will be displayed in the unknownEntityDialog.
const dialogMessages = [
    { text: "Who are you?", timeout: 0 },
    { text: "...", timeout: 8000 },
    { text: "You don't remember?", timeout: 12000 },
    { text: "... ...", timeout: 16000 },
    { text: "Are you hungry?", timeout: 20000 },
    { text: "... ~~~ ... ~~~ ... ~~~", timeout: 24000 },
    { text: "... It seems we're both hungry.", timeout: 28000 },
    { text: "...", timeout: 32000 }
  ];

// Game state variables
let initialClickHappened = false;

// Play Audio function
function playAudio() {
    audio.play();
  }

function showElements() {
    unknownEntityImage.classList.remove("hidden");
    containerForUnknownEntityDialog.classList.remove("hidden");
}

function showMessages(message, timeout) {
    setTimeout(function() {
      unknownEntityDialog.innerText = message;
    }, timeout);
  }

function handleClick() {
    if (!initialClickHappened) {
      initialClickHappened = true;
      clickToStart.classList.add("hidden");
      containerForInitialText.classList.add("hidden");
      playAudio();
      showElements(); // Show elements after the initial click
      currentMessageIndex = 0; // Starts at index 1 after initializing gameplay
  
      // This will activate dialogMessages inside unknownEntityDialog
      dialogMessages.forEach((message, index) => {
        showMessages(message.text, message.timeout);
      });
        //Remove click listener to prevent multiple clicks
        clickToStart.removeEventListener("click", handleClick);
      } else {
      // do nothing
    }
  }