const metodoGet = {
    method: "GET",
    headers: {
        accept: "application/json"
    }
};
const url_types = 'https://pokeapi.co/api/v2/type/';

const element_Types = document.getElementById("type_pkm");
element_Types.innerHTML = '';

// DOM

const createselect = async () => {
    try {
        const data = await fetch(url_types, metodoGet);
        const dataType = await data.json()
        
            const optionType = document.createElement('option');
            optionType.className = 'option';
            optionType.value = `"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"`
            optionType.innerHTML = `All Types`;

            element_Types.appendChild(optionType);

        dataType.results.map(element => {
            const optionType = document.createElement('option');
            optionType.className = 'option';
            optionType.value = `${element.url}`
            optionType.innerHTML = `${element.name}`;

            element_Types.appendChild(optionType);
        });

    } catch (error) {
        console.error(error);
    }
}
    
createselect(); 

element_Types.addEventListener('change', () => { 
   var selectedOption = element_Types.options[element_Types.selectedIndex].value;
    console.log(selectedOption);
    eventActive = true
    // fetchData(selectedOption); no resulta porque la lista que deveria recorrer parte de .pokemon y no de .result como espera

    //o definimos una nueca funcion, y filtramos la anterior por DOM
    // o modificamos la funcion anterior para que filtre si hay eventlistener y actuar en base a ello
});
