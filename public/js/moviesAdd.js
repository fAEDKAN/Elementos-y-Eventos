window.onload = function(){
    let title = document.querySelector('.moviesAddTitulo')
    let form = document.querySelector('#formulario');
    let article = document.querySelector('article');
    title.innerHTML = 'AGREGAR PELÍCULA';
    title.classList.add('title');
    article.classList.add('fondoTransparente');
    form.classList.add('fondoCRUD');

    /* En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.
 */
    title.addEventListener("mouseover", () => {
        title.classList.toggle("botonBorrar")
    })
    title.addEventListener("mouseout", () => {
        title.classList.toggle("botonBorrar")
    })

    let inputTitle = document.getElementById("title");
    let estadoSecreto = 0;
    

    inputTitle.addEventListener("keypress", (e) => {

            switch (estadoSecreto) {
                case 0:
                    e.key === "s" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 1:
                    e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 2:
                    e.key === "c" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 3:
                    e.key === "r" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 4:
                    e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 5:
                    e.key === "t" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 6:
                    e.key === "o" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    estadoSecreto === 7 && alert("SECRETO MAGICO")
                    estadoSecreto = 0;
                    break;
                default:
                    estadoSecreto = 0;
                    break;
            }
    })

    

}