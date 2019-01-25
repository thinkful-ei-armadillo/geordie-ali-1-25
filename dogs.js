'use strict';

function getDogImages(numDogs = 3) {
  if (numDogs > 50) {
      alert("Too many dogs");
  }  else {
  fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
    .then(response => response.json())
    .then(responseJson => { 
        displayResults(responseJson)
    })
    .catch(error => alert(error.message));
  }
}

function generateHtml(reponse) {
    let htmlText = "";
  for (let i = 0; i < reponse.message.length; i++) {
    htmlText += `<img src="${reponse.message[i]}" class="default-images">`;
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