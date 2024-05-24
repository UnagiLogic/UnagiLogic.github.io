import React, { useState, useEffect } from "react";

{
  /*This is a function that logs any player activity*/
  /*This function is called when the player clicks any button*/
  /*The function will log the activity in the adventure log*/
  /*The activity will be displayed in the adventure log*/
  /*When a new log appears, the old log is pushed down*/
  /*When the logs enters an entry, it creates a new list item*/
  /*The list item is then pushed down when another entry comes in*/
  /*You can scroll through this log and see every entry*/
  /*Only 5 entries will show up on the screen in the space provided*/
}

function AdventureLogComponent({ logEntries }) {
  // remove the existing useState and useEffect because logEntries is now passed as a prop
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div id="adventure-log" className="container toggle-container d-none col-2">
      <div id="adventureLogLabel">ADVENTURE LOG</div>
      <div id="adventureLogText">
        {isLoading ? (
          <p>Loading...</p>
        ) : logEntries.length === 0 ? (
          <p>Adventure Log Text</p>
        ) : (
          logEntries.map((entry, index) => <p key={index}>{entry}</p>)
        )}
      </div>
    </div>
  );
}

export default AdventureLogComponent;
