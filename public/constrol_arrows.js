const left_btn = document.querySelector('#btn_izquierda');
const right_btn = document.querySelector('#btn_derecha');

left_btn.addEventListener('click', () => {
    cambiaUrlIzq();
    eventActive = false
});     

right_btn.addEventListener('click', () => {
    cambiaUrlDer();
    eventActive = false
});     

function cambiaUrlDer() {
contenedor.innerHTML ='';

if (contador > 14 && offset_url > 140){
    offset_url = 0;
    contador = 1;
    fetchData(`https://pokeapi.co/api/v2/pokemon/?offset=${offset_url}&limit=10`);
}else if (contador < 15 && offset_url < 141){
    contador ++;
    offset_url +=10;
    url_parcial = `https://pokeapi.co/api/v2/pokemon/?offset=${offset_url}&limit=10`;

    fetchData(url_parcial)
    // console.log(offset_url)
    // console.log(url_parcial)
    // console.log(contador)
} 
    //else { console.log(url_parcial);
    // console.log(contador) }
};

function cambiaUrlIzq() {
contenedor.innerHTML ='';

    if (contador < 1 && offset_url < 10){
        fetchData(url_general);
        contador = 0;
        offset_url = 0;
        // console.log(url_parcial)
        // console.log(contador)
    }else if (contador >= 1 && offset_url >= 10){
        contador --;
        offset_url -=10;
        url_parcial = `https://pokeapi.co/api/v2/pokemon/?offset=${offset_url}&limit=10`;

        fetchData(url_parcial)
        // console.log(url_parcial)
        // console.log(contador)
    } 
    //else { console.log(url_parcial);
    // console.log(contador) }
};

