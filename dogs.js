function getDogImages(numDogs = 3) {
    
    fetch(`https://dog.ceo/api/breeds/image/random/`)
    .then(reponse => reponse.json())
    .then(responseJson => console.log(reponseJson))
    .catch(error => alert('Try another input'));
}

function inputForm() {
    $('form').submit(event => {
        event.preventDefault();
        
        getDogImages();
    });
}

$(function() {
    console.log('Waiting for input');
    inputForm();
})