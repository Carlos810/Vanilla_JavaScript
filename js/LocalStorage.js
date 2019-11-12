const coche = {
    marca: 'Ferrari',
    color: 'Rojo',
    precio: 600000
}

//transformar el objeto "coche" a JSON.
const cocheString = JSON.stringify(coche);
//cargar a localStorage el objeto transformado.
localStorage.setItem('coche', cocheString);
//console.log(cocheString);

//guardar en una variable elemento existente en localStorage.
let cocheStorage =  localStorage.getItem('coche');
//transformar un JSON a objetoJS.
cocheStorage = JSON.parse(cocheStorage);
//cambiar propiedad de color "rojo" a "negro".
cocheStorage.color = 'Negro';
//transforma nuevamente un objeto JAVASCRIPT a JSON.
cocheStorage = JSON.stringify(cocheStorage);
//cargar a localStorage el objeto modificado.
localStorage.setItem('coche', cocheStorage);

//eliminar un item de local storage usando su key.
//localStorage.removeItem('coche');

