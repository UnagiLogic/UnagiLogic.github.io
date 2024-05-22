

// This is the resourceCache function.
// This function will place a random resource cache image at a random location.
// When clicked, it will update the player's resources and display a message.
export function resourceCache(resources, setResources) {
  const image = createResourceImage();
  positionImageRandomly(image);

  image.addEventListener("click", () => {
      handleImageClick(image, resources, setResources);
  });
}

function createResourceImage() {
  const image = document.createElement("img");
  image.src = "Images/Resources/levelOneSaltwaterResourceCache/resourceCache" + Math.floor(Math.random() * 5) + ".png";
  image.classList.add("resourceCacheImage");
  document.getElementById("containerForResourceCacheImage").appendChild(image);
  return image;
}

function positionImageRandomly(image) {
  image.style.left = Math.floor(Math.random() * 100) + "%";
  image.style.top = Math.floor(Math.random() * 100) + "%";
}

function handleImageClick(image, resources, setResources) {
  image.remove();
  const gainedResources = generateRandomResources();
  updateResources(resources, gainedResources, setResources);
  displayResourceCacheMessage();
}

function generateRandomResources() {
  return {
      clay: Math.floor(Math.random() * 3) + 1, 
      mud: Math.floor(Math.random() * 4) + 1, 
      stone: Math.floor(Math.random() * 3) + 1 
  };
}

function updateResources(resources, gainedResources, setResources) {
  setResources((prevResources) => ({
      ...prevResources,
      clay: prevResources.clay + gainedResources.clay,
      mud: prevResources.mud + gainedResources.mud,
      stone: prevResources.stone + gainedResources.stone
  }));
}

function displayResourceCacheMessage() {
  let resourceCacheMessage = document.createElement("p");
      resourceCacheMessage.innerText = "You found a resource cache!";
      resourceCacheMessage.classList.add("resourceCacheMessage");
}