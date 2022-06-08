let legajo;
let trimestre1; 
let trimestre2
let trimestre3;
let ctdadAlumnosAprobados = parseInt();
let resultado;
let menu ;
menu = parseInt(sigoCargando(menu));

// console.log(menu)
if(isNaN(menu)){
    console.log("Ingrese solo números \nRecargue la página.");
    
}else{
    // console.log(menu);
    while(menu != 3){
        switch(menu){
            case 1: 
                    legajo = parseInt(prompt("Ingresar numero de legajo"));
                    if(isNaN(legajo)){
                       alert("Ingrese solo números");
                    }else{
                        trimestre1 = parseInt(prompt("Ingresar nota primer trimestre"));
                        trimestre2 = parseInt(prompt("Ingresar nota segundo trimestre"));
                        trimestre3 = parseInt(prompt("Ingresar nota tercer trimestre"));
                    }
                    break;
            case 2: 
                    resultado = parseFloat(trimestre1 + trimestre2 + trimestre3 / 3);
                    console.log(resultado);
                    if(resultado >= 7.00){
                        ctdadAlumnosAprobados+=1;


                    }
                    console.log("Cantidad de alumnos aprobados:" + ctdadAlumnosAprobados);
                    break;
            case 3:
                console.log(menu)
                    console.log("Terminé");
                    break;
                    
        }
        menu = parseInt(prompt("¡Bienvenido al simulador de notas! \n Ingrese estos números para continuar con el programa. \n\n 1. Para cargar notas. \n 2. Para calcular notas.\n 3. Para salir"));
    }
}

    
    
function sigoCargando(menu){
   return parseInt(prompt("¡Bienvenido al simulador de notas! \n Ingrese estos números para continuar con el programa. \n\n 1. Para cargar notas. \n 2. Para calcular notas.\n 3. Para salir"));
    
}
