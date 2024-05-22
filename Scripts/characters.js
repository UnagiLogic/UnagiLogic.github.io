class Character { // Declared a class named Character
    constructor(name, dialogue, image) { // Declared a constructor with three parameters
        this.name = name; // Set the name property to the value of the name parameter
        this.dialogue = dialogue; // Set the dialogue property to the value of the dialogue parameter
        this.image = image; // Set the image property to the value of the image parameter
    }
    
    speak() {
        // Code to display a random dialogue line from this.dialogue
    }

    // Add other methods here
}
export default Character; // Export the Character class