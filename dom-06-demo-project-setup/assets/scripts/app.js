const head = document.querySelector('header')
const modal = document.querySelector('.modal')

btnAddMovie = head.lastElementChild;
btnAddMovie.addEventListener('click', ()=>{
    modal.classList.toggle('visible')    
})
