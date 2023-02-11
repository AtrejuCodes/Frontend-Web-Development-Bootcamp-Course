//used in devtools - console. Google Home

const htmlBody = document.querySelector('body');
//htmlBody = Google home body

//Creating a function
const randomClickFunction = function () {
    const colors = ["green", "blue", "yellow", "purple", "black", "grey", "red", "orange", "#ca335c", "#471147"]; //setting Colors variable
    const randomIndex = Math.floor(Math.random() * colors.length); // Getting a random array number from colors
    const randomColor = colors[randomIndex]; //setting randomcolor to retrieved random color
    htmlBody.style.backgroundColor = randomColor; //setting Backgroundcolor of htmlBody
    console.log('The user clicked. The color is now ' + randomColor); // Confirmation. Congratulations!
}

//raw to copy:

const randomClickFunction = function () {
    const colors = ["green", "blue", "yellow", "purple", "black", "grey", "red", "orange", "#ca335c", "#471147"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log('The user clicked. The color is now ' + randomColor);
}

// See if it works: Type randomClickFunction()

//Assign the Fuction to a click
htmlBody.onclick = randomClickFunction;
