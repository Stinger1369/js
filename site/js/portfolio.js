//As a user I can change the avatar image when I click on it

const avatarImages = [
    "image/avatar-bis.png",
    "image/avatar.svg",
    
]
let currentImageIndex = 0;

document.getElementById('avatarImage').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % avatarImages.length;
    this.src = avatarImages[currentImageIndex];
});


//As a user I can replace the text Matt on the paragraphe with your name and it's color with the color white
//Prompt is useful in this case.Create a button to open a prompt.The prompt is to ask the user to type text. With this prompt you can modify the text Matt on the paragraphe with your name and change it's color in white.

// const myName = prompt('What is your name?');
// document.getElementById('name').innerHTML = myName;
// document.getElementById('name').style.color = 'white';

// let myName = document.getElementById('name');
// myName.innerHTML = 'Bilel';
// myName.style.color = 'white';

// document.getElementById('promptButton').addEventListener('click', function() {
//     var myName = prompt("Entrez votre prénom :", "Votre prénom");
//     if(myName) {
//         document.getElementById('name').innerHTML = myName;
//     }
// });

// document.getElementById('promptBackgrund').addEventListener('click', function() {
//     var backgroundColor = prompt("Entrez la couleur de fond (ex: #750ff7, red ...) :", "Votre couleur");
//     if(backgroundColor) {
//         var descriptionElement = document.querySelector('.pink-bg');
//         descriptionElement.style.backgroundColor = backgroundColor;
//     }
// });

document.getElementById('modifyButton').addEventListener('click', function() {
    var myName = prompt("Entrez votre prénom :", "Votre prénom");
    if(myName) {
        document.getElementById('name').innerHTML = myName;
    }

    var newColor = prompt("Entrez la nouvelle couleur pour les éléments 'pink-bg' et le texte 'pink-text' (ex: #750ff7, red ...) :", "Votre couleur");

    if(newColor) {
        var bgElements = document.querySelectorAll('.pink-bg');
        var textElements = document.querySelectorAll('.pink-text');
        var navElements = document.querySelectorAll('.navbar a');

        bgElements.forEach(function(element) {
            element.style.backgroundColor = newColor;
        });

        textElements.forEach(function(element) {
            element.style.color = newColor;
        });

        navElements.forEach(function(element) {
            element.style.color = newColor;
        });
    }
});

//As a user I can with a button and an input, add a new li element to the dev tool list back
//Create a button and an input text in the HTML file. The button is to add a new li element to the dev tool list back.

document.getElementById('addButton').addEventListener('click', function() {
    var newToolText = document.getElementById('newTool').value;
    if(newToolText) {
        var newLi = document.createElement('li');
        newLi.textContent = newToolText;
        document.getElementById('front-dev-tools').appendChild(newLi);
    }
});


