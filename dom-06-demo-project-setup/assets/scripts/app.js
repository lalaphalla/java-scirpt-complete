// const modal = document.querySelector('.modal')

// // const head = document.querySelector('header')
// // const btnAddMovie = head.lastElementChild;

// const btnAddMovie = document.querySelector('header button');

// btnAddMovie.addEventListener('click', toggleMovieModal)

// const toggleMovieModal = () =>{
//     modal.classList.toggle('visible')
// }
// const toggleBackDrop = () => {

// }

//backdrop toggle
//cancel btn toggle
// 

const addMovieModal = document.getElementById('add-modal')
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const successAddMovieButton = addMovieModal.querySelector('.btn--success')
const userInput = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text');

const movies = []
console.log(userInput);
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackDrop()
}

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible')
}

const backdropClickHandler = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackDrop()
}

const addMovieHandler = () => {
    const titleValue = userInput[0].value
    const imageUrlValue = userInput[1].value
    const ratingValue = userInput[2].value

    console.log(titleValue);
    const newMovie = {
        title : titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie)
    console.log(movies);
    toggleMovieModal()
    updateUI()
    renderNewMovieElement(newMovie.title,newMovie.image, newMovie.rating)
}

const updateUI = () =>{
    entryTextSection.style.display = movies.length === 0 ?  'block' : 'none';
}

const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class"movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement)
}

startAddMovieButton.addEventListener('click',toggleMovieModal)
cancelAddMovieButton.addEventListener('click', backdropClickHandler)
backdrop.addEventListener('click', backdropClickHandler)
successAddMovieButton.addEventListener('click', addMovieHandler)
