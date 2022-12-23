window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitle = document.querySelector('.moviesListTitle');

    let logoDh = document.querySelector(".logoDH")

    logoDh.addEventListener("mouseover", () =>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })
    
    console.log(body);
    moviesListTitle.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitle.style.color ='white';
    moviesListTitle.style.backgroundColor = 'teal';
    moviesListTitle.style.padding = '20px';

    

}