console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    addingImagesToDOM()
    differentBreeds()
})
// Challenge 1
    // on page load- fetch the images using "https://dog.ceo/api/breeds/image/random/4" 
function addingImagesToDOM() {
    const images = "https://dog.ceo/api/breeds/image/random/4"
    fetch(images)
    .then(res => res.json())
    .then(results => {
        results.message.forEach(image => addingImages(image))
    })
}
function addingImages(imgUrl) {
    let container = document.querySelector('#dog-image-container')
    let dogImage = document.createElement('img')
    dogImage.src = imgUrl
    container.appendChild(dogImage)
}
    // parse the response as `JSON`
    // add image elements to the DOM for each image in the array


// Challenge 2
    // After the first challenge is completed, add JavaScript so that :
        // on page load, fetch all the dog breeds using 'https://dog.ceo/api/breeds/list/all'
function differentBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      getAllBreeds(breeds);
    })
}

function getAllBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds');

    breeds.forEach(breed => addingBreeds(breed))
}

function addingBreeds(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed
    ul.appendChild(li)
}
        // add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

// Challenge 3
    // Once all of the breeds are rendered in the `<ul>`, add javScript so that the font color of a particular `<li> changes on click. This can be a color of your choosing. When the user clicks any of the dog breed list items, the color the text should change.

// Challenge 4
    // Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.