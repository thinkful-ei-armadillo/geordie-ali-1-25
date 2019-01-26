'use strict';

function getDogBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${generateBreed(breed)}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
    })
    .catch(error => alert(error.message));
}

function generateBreed(response) {
  let breedArray = response.split(' '); // [french, bulldog]
  let finalArray = [];
  for (let i = 0; i < breedArray.length; i++) {
    finalArray.push(breedArray.pop()); // finalArray = [bulldog, french]
  }
  let breedText = finalArray.join('-');
  return breedText;
}

function generateHtml(breedText) {
  return `<img src="${breedText.message}" class="default-images">`;
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.default-images').html(
    generateHtml(responseJson));
    
}

function inputForm() {
  $('form').on('submit', (event => {
    event.preventDefault();  
    getDogBreed(event.target.dogEntry.value);
  }
  ));
}

$(function() {
  console.log('Waiting for input');
  inputForm();
});