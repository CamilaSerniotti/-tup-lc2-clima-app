async function addCityToLocalStorage(){
    let { getCitiesFromLocalStorage, call_api } = await import ("./common.js");
    let cities = getCitiesFromLocalStorage();
    let verif = document.getElementById("entrada").value;
    let apis = (await call_api(verif)).cod;
    if(cities.includes(verif)){
        document.getElementById("cartel").innerHTML="La ciudad ingresada ya se encuentra almacenada";
        document.getElementById("cartel").style.background= "#ffc107";
    }
    else if(apis != 200){
        document.getElementById("cartel").innerHTML="Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar";
        document.getElementById("cartel").style.background= "#dc3545";
    }
    else{
        cities.push(verif)
        document.getElementById("cartel").innerHTML= "Ciudad agregada con éxito";
        document.getElementById("cartel").style.background= "#28a745";
    }
    localStorage.setItem("CITIES",JSON.stringify(cities));
}



