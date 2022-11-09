async function opciones (){
    let {getCitiesFromLocalStorage} = await import("./common.js");
    let seleccion = document.getElementById("seleccionable");
    let ciudad = getCitiesFromLocalStorage();
    for(let ciudades of ciudad){
        let opcion = document.createElement("option")
        opcion.value = ciudades;
        opcion.innerHTML = ciudades;
        seleccion.appendChild(opcion);
    }
}
async function ConsultarApi() {
    let { call_api } = await import("./common.js"); 
    let seleccion = document.getElementById("seleccionable").value;
    document.getElementById("card").style.display = "none";
    document.getElementById("error").style.display = "none";
    let objeto = await call_api(seleccion);

    if (objeto.cod != 200) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("card").style.display = "block";
        document.getElementById("ciudades").innerHTML = objeto.name;
        document.getElementById("temp").innerHTML = `Temperatura: ${objeto.main.temp}°`;
        document.getElementById("termica").innerHTML = `Sensación térmica: ${objeto.main.feels_like}°`;
        document.getElementById("humedad").innerHTML = `Humedad: ${objeto.main.humidity}%`;
        document.getElementById("viento").innerHTML = `Velocidad del viento: ${(objeto.wind.speed).toFixed(2)}km/h`;
        document.getElementById("presion").innerHTML = `Presión: ${objeto.main.pressure} P`;
    }
}
