
// This is the function for the narrator.
// The narrator will give lore about the current area.
// The messages will be stored in the adventures log.
// The lore will be displayed as messages in the adventures log.
// The messages will be chosen at random per area.
// The messages will be chosen at random per action.
export function narrator() {
    let narratorMessage = document.createElement("p");
    narratorMessage.innerText = "You found a resource cache!";
    narratorMessage.classList.add("narratorMessage");
    document.getElementById("containerForNarratorMessage").appendChild(narratorMessage);
    setTimeout(function() {
      narratorMessage.remove();
    }, 3000);
  }