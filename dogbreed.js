use strict';

function getDogBreed(breed) {
    fetch(`https://images.dog.ceo/breeds/${generateBreed(breed)}/images/random`)
    .then(response => response.json())
    .then(responseJson => { 
        displayResults(responseJson)
    })
    .catch(error => alert(error.message));
  }
}

function generateBreed(response) {
    let breedArray = response.split(" "); // [french, bulldog]
    let finalArray = [];
    for (let i = 0; i < breedArray.length; i++) {
        finalArray.append(breedArray.pop()); // finalArray = [bulldog, french]
    }
    let breedText = finalArray.join('-');
    return generatedHtml(breedText);
}

function generateHtml(response) {
    let htmlText = "";

  for (let i = 0; i < finalArray.length; i++) {
    htmlText = `<img src="${breedText}" class="default-images">`;
    }
  return htmlText;
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.default-images').html(
      generateHtml(responseJson));
    
  }

function inputForm() {
  $('form').on('submit', (event => {
    event.preventDefault();
    if (!event.target.dogEntry.value) {
        getDogImages();
    } else {   
    getDogImages(parseInt(event.target.dogEntry.value, 10));
    }
  }));
}

$(function() {
  console.log('Waiting for input');
  inputForm();
});