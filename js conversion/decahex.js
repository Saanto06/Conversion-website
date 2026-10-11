document.getElementById("convertir").addEventListener("click", function(){
    let numDec=Number(document.getElementById("numDec").value);
    let conversion =numDec.toString(16);
    document.getElementById("resultado").textContent="Tu numero ("+numDec+") en hexadecimal es "+conversion;
    }); 