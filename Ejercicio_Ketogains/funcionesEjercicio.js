function Aproximacion () {

    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event){
            event.preventDefault();
        }
    )

    let superior = parseFloat(document.getElementById("superior").value);
    let inferior = parseFloat(document.getElementById("inferior").value);
    const objetivo = parseFloat(document.getElementById("objetivo").value);
    const error = parseFloat(document.getElementById("error").value);
    let numiteraciones = 0;
    let resultado;


   if( superior == null ) {
      alert("limite superior requerido");
   }else if( inferior == null ) {
      alert("limite inferior requerido");
   }
   else if( objetivo == null ) {
      alert("objetivo requerido");
   }
   else {
       if( error == null ) {
        alert("error requerido");
       }
   }
   

    
    while(true){
        let mayor = objetivo + error;
        let menor = objetivo - error;

        resultado = ( superior + inferior ) / 2;
        document.getElementById("resval").value = resultado.toFixed(2);
        console.log(superior + " + " + inferior + " = " + resultado);
        if(resultado >= menor && resultado <= mayor || resultado === objetivo) return true;
        
        if(resultado < objetivo) {
            inferior = resultado
        }else {
            superior = resultado;
        }

        numiteraciones ++;

        document.getElementById("resobj").value = objetivo;
        document.getElementById("reserr").value = error;
        document.getElementById("resnum").value = numiteraciones; 
    }
      

    

}