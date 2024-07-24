console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const imgContainer = document.getElementById("dog-image-container")
const dogBreeds = document.getElementById("dog-breeds")


fetch(imgUrl)
.then(response => response.json())
.then(dogs => {
    dogs.message.forEach((dog) => {
        const dogImg = document.createElement('img')
        dogImg.src = `${dog}`
        imgContainer.appendChild(dogImg)
    })
})



const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
.then(response => response.json())
.then(breeds => {
    Object.keys(breeds.message).forEach(breed =>{
        dogBreed = document.createElement('li')
        dogBreed.textContent = breed
        dogBreeds.appendChild(dogBreed)

        dogBreed.addEventListener('click', () => {
            dogBreed.style.color = "blue"
        })
    })
})


//when the letter is selected in the toggle, use that letter to filter the ul 
const myList = document.getElementsByTagName('li')
const filterElement = document.getElementById('breed-dropdown')
const filterVal = filterElement.value

filterVal.addEventListener('change', () => {
for (i=0; i<myList.length; i++){
    if (myList[i].textContent[i] === filterVal){
        myList[i].style.display = ""
    }
    else{
        myList[i].style.display = "none"
    }
}
})