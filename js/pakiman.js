/* Establecer clase Pakiman y generar 2 metodos para visualizar los objetos en el navegador  */

class Pakiman
{
    constructor(n,v,a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }

    hablar()
    {
        alert(this.nombre);
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write('<p>');
        document.write('<strong>'+ this.nombre +'</strong></br>') 
        document.write('Vida: '+this.vida+'</br>') 
        document.write('Ataque: '+this.ataque) 
        document.write('</p>'); 
        document.write('<hr>'); 
    }
}

