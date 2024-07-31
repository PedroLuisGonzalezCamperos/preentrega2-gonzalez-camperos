

/* Con este código un vendedor puede saber si tiene disponible algún producto en su inventario, en caso de tenerlo se le indicará con un alert la cantidad disponible del producto, en caso de no tenerlo se le indicará si quiere agregar este nuevo producto y que indique el precio. Por último se le preguntará al usuario si desea conocer la totalidad de artículos disponibles en el inventario
*/


let entrada = parseInt(prompt("Escoja el artículo para indicar la cantidad disponible en el inventario \n 1-Polos \n2-pantalones \n3-Chaquetas \n4-Sudaderas \n5-Shorts  \n6-Agregar un artículo al inventario"));

let inventario = [ 

    {

    nombre: "Polos",
    disponibilidad:10

    },

    {

    nombre: "Pantalones",
    disponibilidad:18
    
    },

    {

    nombre: "Chaquetas",
    disponibilidad:32
        
    },

    {

    nombre: "Sudaderas",
    disponibilidad:29
            
    },

    {

    nombre: "Shorts",
    disponibilidad:29
                
    },
    
     ];

     if (entrada===6) {

        let agregar = prompt("Indique el producto que quiere agregrar ");

        let cantidad1 = parseInt(prompt("Indique la cantidad"));


      
    
            inventario.push({nombre:agregar,disponibilidad:cantidad1});
            
    
           
    
    }

   console.log(inventario);

  

     if (entrada-1<=4) {


        alert("Hay  " + inventario[entrada-1].disponibilidad+"  unidades");

       }    


// Sumar los precios de los productos

let x=parseFloat(prompt(" ¿Desea conocer la cantidad total de artículos en el Inventario, indique con los números 1 y 2 \n 1- Si \n 2-no?"));



if (x===1) {



    const disponibilidades = inventario.map(valor => valor.disponibilidad)

    console.log(disponibilidades); 
    
    
    let total =0;
    
    for (let i=0;i<disponibilidades.length-1;i++) {
    
    total += disponibilidades[i]
    
    }
    
    
    alert("La cantidad es"+" "+total);
    

}  

else { alert("Hasta Luego Señor Usuario")}














