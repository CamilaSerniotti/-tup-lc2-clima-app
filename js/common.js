export function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}
export async function call_api(ciudad){
    let datos;
    let respuesta;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=18babb5b2571d7ab7cc4f76e42b7618c&units=metric&lang=es`;
    respuesta = await fetch(api);
    datos= await respuesta.json();
    return datos;
}