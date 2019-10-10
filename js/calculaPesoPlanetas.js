        /* 
        Gravedad en los planetas de nuestro sistema solar:
                
        Mercurio:   3,70 m/s2
        Venus:      8,87 m/s2
        tierra:     9,18 m/s2
        Marte:      3,71 m/s2
        Júpiter:    23,12 m/s2
        Saturno:    8,96 m/s2
        Urano:      8,69 m/s2
        Neptuno:    11 m/s2
        Plutón:     0,81 m/s2     
        */
 
    var getPesoUsuario  =  peso_en_tierra = parseFloat(prompt('¿Cuantos kilos pesas en la tierra?'));
    var planeta         =  parseInt(prompt('Selecciona tu planeta :\n(1) es MARTE \n(2) es JUPITER ')) ;

    const g_tierra      =  9.8;
    const g_marte       =  3.7;
    const g_jupiter     =  24.8;  

    if(planeta == 1)
    {
        /*Formula obtener peso en MARTE*/
        let peso_final = ((peso_en_tierra / g_tierra) * g_marte)
            peso_final = peso_final.toFixed(1)
            alert('Tu peso en MARTE es de: '+ peso_final +' Kg')
    }

    else if(planeta == 2)
    {
        /*Formula obtener peso en Jupiter*/
        let peso_final = ((peso_en_tierra / g_tierra) * g_jupiter)
            peso_final = peso_final.toFixed(1)
            alert('Tu peso en JUPITER es de: '+ peso_final +' Kg')
    }

    else
    {
        alert('¡Ingresa información válida, porfavor!')
    }






    

    