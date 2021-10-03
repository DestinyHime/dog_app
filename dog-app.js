const dog_breeds = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds"); 

fetch(dog_breeds)
.then (function (response) { 
  return response.json(); 
})
.then (function (data) {
  const breedsObject = data.message; 
  const breedsArray = Object.keys(breedsObject);

  
  for (let i= 0; i < breedsArray.length; i++) {
    const option = document.createElement("option"); 
    option.value = breedsArray[i]; 
    option.innerHTML = breedsArray[i]; 
    select.appendChild(option);
  }
})

select.addEventListener("change", function(event) 
{
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random` 
  getDoggo(url); 

  //make URL 

  //show loading spinner

  //use the URL to change the current imag

  //stop showing loading spinner
});
const img = document.querySelector(".dog-img");
const spinner = document.querySelector(".emoji"); 

function getDoggo (url) {
  spinner.classList.add("show");
  img.classList.remove("show");
  fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    img.src = data.message;
    spinner.classList.remove("show");
    img.classList.add("show");
  })
}

img.addEventListener("load", function () {
  spinner.classList.remove("show");
  img.classList.add("show");
})
