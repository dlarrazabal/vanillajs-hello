function generadorexcusa(){
    
    // Arreglo con las partes de las excusas
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    // Generacion de index aleatoriamente
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // Estructura concatenada de la excusa a generar por parte del script
    let excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
    return excuse;
}

// Para mostrar y cambiar la excusa cuando la pagina se actualice
window.onload = function(){
    let laexcusa = document.getElementById('excuse');
    laexcusa.innerHTML = generadorexcusa();
}