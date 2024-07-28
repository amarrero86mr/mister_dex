// primero renderiza la url original,
// si recive de constrol_arrows y de filters evalua cual envia y renderiza.

const opcion = {
    method: "GET",
    headers: { accept: "application/json" }
};

let todaLaInfo = [];
const contenedor = document.getElementById("contenedor-tarjetas");
let eventActive = false;

// DOM


let url_general = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"
let contador = 0;
let offset_url = 0;
let url_parcial = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`



fetchData(url_general);

if (eventActive) {console.log(eventActive)}

//funcin asincronica y... tratamos
async function fetchData(algo) {
    try {
        //guardamos la llamada 
        const response = await fetch(algo, opcion);
        const datos = await response.json();
        

        //guardamos la llamada de llamadas
        const fetchPromises = datos.results.map(async element => {
            const res = await fetch(element.url, opcion);
            const data = await res.json();
            todaLaInfo.push({
                nombre: data.name,
                url_img: data.sprites.front_default,
                tipo: data.types[0].type.name
            });

            // creamos la tarjeta para el contener la info tambien podriamos hacerlo aparte...
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';
            tarjeta.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name}</h3>
                <p>Tipo: ${data.types[0].type.name}</p>
            `;

            contenedor.appendChild(tarjeta);
        });

        await Promise.all(fetchPromises);
        //console.log(todaLaInfo);
        
    } catch (error) {
        console.error(error);
    }
}
