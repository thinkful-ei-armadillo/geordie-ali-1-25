'use strict';

function getDogImages() {
    
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(reponse => reponse.json())
    .then(responeJson => displayResults(responeJson))
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Try another input'));
}

function displayResults(responeJson){
  $('.default-images').replaceWith(
    `<img src="${responeJson.message}" class="default-images">`
  );
}

function inputForm() {
  $('form').on('js-dog-submit', 'submit', (event => {
    event.preventDefault();
        
    getDogImages();
  }));
}

$(function() {
  console.log('Waiting for input');
  inputForm();
});