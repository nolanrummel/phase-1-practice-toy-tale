let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetcher(){
  fetch("http://localhost:3000/toys")
  .then((r) => r.json())
  .then(toys => {
    toys.forEach(toy => toyCreator(toy))
  })
}

const toyCollection = document.querySelector('#toy-collection')

function toyCreator(toy){
  const toyDiv = document.createElement('div')
  toyDiv.classList.add('card')

  const toyHeader = document.createElement('h2')
  toyHeader.textContent = toy.name

  const toyImage = document.createElement('img')
  toyImage.src = toy.image
  toyImage.classList = ('toy-avatar')

  const toyLikes = document.createElement('p')
  toyLikes.textContent = toy.likes
  toyLikes.
  
    toyDiv.append(toyHeader)
    toyDiv.append(toyImage)
    toyDiv.append(toyLikes)
      toyCollection.appendChild(toyDiv)
  }



fetcher()
// toyCreator(toy)