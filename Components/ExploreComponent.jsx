import React, { useState, useEffect, useRef } from "react";
import { gainFishingInsight } from "../Scripts/insights";
import { purchasedResources } from "../Scripts/purchasedResources";
import ResourceDisplayItem from "./ResourceDisplayItem";
import ActionButtonsComponent from "./ActionButtonsComponent.jsx";
import InsightButtonsComponent from "./InsightButtonsComponent.jsx";
import FloatingNumber from "./FloatingNumber.jsx";

function ExploreComponent({
  currentLocation,
  resources,
  setResources,
  energy,
  setEnergy,
  maxEnergy,
  updateEnergy,
  playEnergyAnimation,
  updateEnergyBar,
}) {
  const [fishImage, setFishImage] = useState(null);
  let [showFishImage, setShowFishImage] = useState(false);
  const exploreAreaRef = useRef(null);
  const [floatingNumbers, setFloatingNumbers] = useState([]);

  function spawnFloatingNumber(amount, type, x, y, duration = 3000) {
    const exploreArea = resourceContainerRef.current;
    if (exploreArea) {
      // Make sure the explore area exists
      const exploreRect = exploreArea.getBoundingClientRect();
      // Make the numbers spawn within the explore-area boundaries
      const adjustedX = x - exploreRect.left; // Adjust for container's position
      const adjustedY = y - exploreRect.top;

      setFloatingNumbers((prevNumbers) => [
        ...prevNumbers,
        { amount, type, x: adjustedX, y: adjustedY, duration },
      ]);
    }
  }

  function determineClickerImage() {
    if (currentLocation === "The Spawning Pool") {
      return "Images/Buttons/saltwaterAreaFishClickerButton.png";
    } else if (currentLocation === "The Swamp Trail") {
      return "Images/Buttons/swampAreaClickerButton.png";
    }
  }

  useEffect(() => {
    if (currentLocation === "The Spawning Pool") {
      setShowFishImage(true);
    } else {
      setShowFishImage(false);
    }
  }, [currentLocation]); // Run the effect whenever currentLocation changes

  const animations = [
    "fishSwimLeftRight",
    "fishSwimRightLeft",
    "fishSwimUpDown",
    "fishSwimDownUp",
    "fishSwimDiagonalTopLeft",
    "fishSwimDiagonalTopRight",
    // ... Add more animation names
  ];

  function displayFishImage() {
    const fishImage = new Image(); // Create an Image element
    fishImage.src = `Images/Resources/saltwaterFish/fish${Math.floor(
      Math.random() * 6
    )}.png`;
    fishImage.className = "fishImage";
    fishImage.alt = "Fish";
    fishImage.style.position = "absolute";

    let container = exploreAreaRef.current;
    if (container) {
      let containerRect = container.getBoundingClientRect();
      let startLeft = Math.random() * containerRect.width;
      let startTop = Math.random() * containerRect.height;
      fishImage.style.left = `${startLeft}px`;
      fishImage.style.top = `${startTop}px`;
      container.appendChild(fishImage);

      // Dynamically calculate random end position
      let endLeft = Math.random() * (containerRect.width - fishImage.width);
      let endTop = Math.random() * (containerRect.height - fishImage.height);

      function randomCubicBezier() {
        const x1 = Math.random().toFixed(2);
        const y1 = Math.random().toFixed(2);
        const x2 = Math.random().toFixed(2);
        const y2 = Math.random().toFixed(2);
        return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
      }

      fishImage.onload = () => {
        //Applies swimming animation
        let animationName =
          animations[Math.floor(Math.random() * animations.length)];
        let duration = 1000 + Math.random() * 2000;
        fishImage.style.animation = `${animationName} ${duration}ms ${randomCubicBezier()} infinite`;

        // Applies bobbing animation
        setTimeout(() => {
          fishImage.style.animation += `, fishBob 1s ease-in-out infinite`;
        }, Math.random() * 1000); // Random delay of up to 1 second

        fishImage.addEventListener("click", () => {
          handleFishClick();
          fishImage.remove();
          setFishImage(null); // Clear the fishImage from the state
        });

        // Prevent dragging of fishImage
        fishImage.ondragstart = (event) => {
          event.preventDefault();
        };

        // Remove after 3 seconds
        setTimeout(() => {
          fishImage.remove();
          setFishImage(null);
        }, 3000);

        function animateFish() {
          fishImage.style.left = `${endLeft}px`;
          fishImage.style.top = `${endTop}px`;
        }
        let animationInterval = setInterval(animateFish, 100);

        //Cleanup interval when image is removed
        fishImage.addEventListener("animationend", () => {
          clearInterval(animationInterval);
        });
      };
    }
  }

  function handleFishClick() {
    setResources((prevResources) => ({
      ...prevResources,
      fish: prevResources.fish + purchasedResources.fishPerClick,
    }));
    setShowFishImage(true);
    displayFishImage();
  }

  useEffect(() => {
    if (fishImage && resourceContainerRef.current) {
      const fishRect = fishImage.getBoundingClientRect();
      const x = fishRect.left + fishRect.width / 2;
      const y = fishRect.top + fishRect.height / 2;
      spawnFloatingNumber(1, "gain", x, y);
    }
  }, [fishImage]); // Run the effect only when fishImage changes

  function handleClickOnFish(event) {
    event.stopPropagation(); // Stop the event from bubbling up to the parent
    handleFishClick();
    setFishImage(null);

    // Call spawnFloatingNumber here
    if (fishImage && resourceContainerRef.current) {
      const fishRect = fishImage.getBoundingClientRect();
      const x = fishRect.left + fishRect.width / 2;
      const y = fishRect.top + fishRect.height / 2;
      spawnFloatingNumber(1, "gain", x, y);
    }
  }

  function handleMudClick() {
    setResources((prevResources) => ({
      ...prevResources,
      mud: prevResources.mud + 1,
    }));
  }

  function determineClickerFunction() {
    if (currentLocation === "The Spawning Pool") {
      return handleFishClick;
    } else if (currentLocation === "The Swamp Trail") {
      return handleMudClick;
    }
  }

  useEffect(() => {
    // Select all image elements on the page
    const images = document.querySelectorAll("img");

    // Attach a dragstart event listener to each image
    images.forEach((img) => {
      img.addEventListener("dragstart", (event) => {
        event.preventDefault(); // Prevent the default dragging behavior
      });
    });
  }, []);

  return (
    <>
      <div className="gameScreenContainer">
        <div id="adventure-menu" className="container toggle-container d-none">
          <div id="locationNameLabel">{currentLocation}</div>

          <div className="locationActivityMenu">
            <div className="row">
              <div className="col-5 activity">
                <div id="locationExploreLabel">EXPLORE</div>
                <div id="locationExploreContainer">
                  <img
                    src={determineClickerImage()}
                    width="300px"
                    height="350px"
                    id="currentLocationButtonImage"
                    onClick={determineClickerFunction()} // This increments the fish count
                  />
                </div>

                <div id="locationExploreInventoryLabel">INVENTORY</div>
                <div id="locationExploreInventoryContainer">
                  <ResourceDisplayItem
                    resourceType="fish"
                    amount={resources.fish}
                  />
                  <ResourceDisplayItem
                    resourceType="clay"
                    amount={resources.clay}
                  />
                  <ResourceDisplayItem
                    resourceType="mud"
                    amount={resources.mud}
                  />
                  <ResourceDisplayItem
                    resourceType="stone"
                    amount={resources.stone}
                  />
                  <ResourceDisplayItem
                    resourceType="shrimp"
                    amount={resources.shrimp}
                  />
                </div>
              </div>

              {/* Render the ActionButtonsComponent */}
              <ActionButtonsComponent
                resources={resources}
                setResources={setResources}
                energy={energy}
                setEnergy={setEnergy}
                maxEnergy={maxEnergy}
                updateEnergy={updateEnergy}
                playEnergyAnimation={playEnergyAnimation}
                updateEnergyBar={updateEnergyBar}
              />

              {/* Render the InsightButtonsComponent */}
              <InsightButtonsComponent
                resources={resources}
                setResources={setResources}
                energy={energy}
                setEnergy={setEnergy}
                gainFishingInsight={gainFishingInsight}
                updateEnergyBar={updateEnergyBar}
              />

              <div id="locationInformationActivity" className="container">
                <div className="locationInformationSlot">
                  <div id="adventureLog">
                    Placeholder Text. This should be about two sentences on 2-3
                    seperate lines
                  </div>
                </div>
                <div className="locationInformationSlot">
                  <div id="notificationArea">
                    Place holder Text. This should be about two sentences on 2-3
                    seperate lines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {floatingNumbers.map((number) => (
          <FloatingNumber key={number.id} {...number} />
        ))}

        <div
          id="explore-area"
          ref={exploreAreaRef}
          className="explore-area container toggle-container d-none"
        >
          {/* conditionally render the fish image */}
          {fishImage && ( // <-- Only render fishImage if it exists
            <img
              src={fishImage.src}
              className="fishImage"
              style={fishImage.style}
              alt="Fish"
              onClick={handleClickOnFish}
            />
          )}
        </div>
      </div>

      {/* Render the floating numbers */}
      <div id="containerForNumber">
        {floatingNumbers.map((number) => (
          <FloatingNumber key={number.id} {...number} />
        ))}
      </div>
    </>
  );
}

export default ExploreComponent;
