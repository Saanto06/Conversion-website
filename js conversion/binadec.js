document.getElementById("convertir").addEventListener("click", function(){
    let numBin=document.getElementById("numBin").value;
    if(/^[01]+$/.test(numBin)){
    let conversion =parseInt(numBin, 2);
    document.getElementById("resultado").textContent="Tu numero ("+numBin+") en decimal es "+conversion;
    } else{
        document.getElementById("resultado").textContent="Por favor, introduce un numero binario.";

    }
    }); 