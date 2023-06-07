/* manage switch button */ 
const switchBox = document.querySelector('.switch');
const btn       = document.querySelector('.btn');
const icone     = document.querySelector('i');
const container = document.querySelector('.container');
const titre     = document.querySelector('h1');

switchBox.addEventListener('click', function(){
    btn.classList.toggle('btn-change');  
    /* dont know how just a toggle didnt change icon but i change icone by this conditions */
    if (icone.classList.contains("fa-moon")){
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
    } else {
        icone.classList.add("fa-moon");
    }
    /* ternary for text, is "DARK MODE" ? true = replace with "LIGHT MODE" else = false replace with "DARK MODE"*/
    titre.innerHTML === "DARK MODE" ? (titre.innerHTML = "LIGHT MODE") : (titre.innerHTML = "DARK MODE");    
    icone.classList.toggle('icone-change');
    switchBox.classList.toggle('switch-change');
    container.classList.toggle('container-change');    
});
