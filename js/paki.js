
var imagenes = [];
imagenes['Cauchin'] = 'imagenes/vaca.png';
imagenes['Pokacho'] = 'imagenes/pollo.png';
imagenes['Tocinauro'] = 'imagenes/cerdo.png';

/* Insertar 3 instancias de la clase Pakiman en un array vacio */
var coleccion = [];
coleccion.push(new Pakiman('Cauchin', 100,30));
coleccion.push(new Pakiman('Pokacho', 80,50));
coleccion.push(new Pakiman('Tocinauro', 120,40));


/* ciclo que recorre el array completo y manda a ejecutar 2 metodos para cada objeto
 que es ingresado como argunmento en las lineas (9,10,11)*/
for(var paki of coleccion)
{
    paki.mostrar();
    paki.hablar();
}