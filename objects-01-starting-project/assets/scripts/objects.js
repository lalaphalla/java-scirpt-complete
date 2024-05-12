// const movieList = document.getElementById('movie-list')

// movieList.style['background-color'] = 'red'
// movieList.style.display = 'block'
// const person = {
//     name: 'Phalla',
//     age: 30,
//     hobbies: ['coding', 'gaming'],
//     greet: function(){
//         alert('ជំរាបសួរ')
//     }

// }
// // person.greet()
// person.isAdmin = true;
// delete person.age
// console.log(person);

const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []
const addMovieHandler = () => {
    const title = document.getElementById('title').value
    const extraName = document.getElementById('extra-name').value
    const extraValue = document.getElementById('extra-value').value

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '' ){
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    }
    movies.push(newMovie)
    console.log(newMovie);
}

addMovieBtn.addEventListener('click', addMovieHandler)
