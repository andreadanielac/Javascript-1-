console.log("hola mundo");


const sumar = () => {
    
    const y = parseInt(document.getElementById("n2").value);
    const x = parseInt(document.getElementById("n1").value);
   
    if (isNaN(x) || isNaN(y)) {  
       console.log("Es necesarios introducir dos números válidos");  
      }else{
        let suma = x + y;
        console.log(suma);
        //crear un elemento <p> de html
       const result = document.createElement("p");
       //crear el texto que ira dentro de la etiueta <p>
       const node = document.createTextNode(`Resultado: ${suma}`);
       //fusionar el texto con la etiqueta <p>
       result.appendChild(node);
        // agregar el elemento <p> al body del html
       document.body.appendChild(result);
      }

    }





