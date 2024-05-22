1. SceneComponent

State:

currentText: The text of the current scene or dialogue segment.
background: Path to the background image.
characterImage: Path to a character image (if applicable).
choices: An array of choice objects (structure discussed below).
Methods:

handleClick(choiceIndex): Handles player's selection of a choice, updating game state and progressing the story.
Rendering:

Displays the scene background image.
Displays the current scene text.
Iterates through the choices array rendering choice buttons.

2. ChoiceButtonComponent

Props:

choiceText: The text to display on the button.
onClick: A function passed from the parent component to handle the choice selection logic.
Rendering:

Renders a button element with the choiceText.

3. PlayerStatsComponent

State:

energy: The player's current energy level.
fish: The player's current fish count.
(Other stats as your game design requires)
Rendering:

Displays the player's energy level.
Displays the player's fish count.

4. ProgressIndicatorComponent

Props:
progress: A value representing the current progress within a storyline or quest.
Rendering:
Displays a progress bar or visual representation of the progress.
