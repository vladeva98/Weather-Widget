let weather = {
    "apiKey": "656c933e25440df365cad9d4cf398774",
    fetchWeather: function (city)
{
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=656c933e25440df365cad9d4cf398774"
        )
.then((response)=>response.json())
.then((data) => this.displayWeather(data));
},
displayWeather: function(data){

    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
   
    document.querySelector(".city").innerText = "Weather in" +""+ name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity:" + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed:"  + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url(`https://images.unsplash.com/photo-1480796927426-f609979314bd?  + name + ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8T3VoOGpkOGw4V298fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60`)";


},
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("Skopje");

// function convertToCelsiusToFahrenheit() {
    
//     const temp = parseFloat(document.getElementById('t').value);
  
    
//     const fahrenheit = (temp * 9/5) + 32;
  
    
//     document.getElementById('temp').innerText = fahrenheit.toFixed(2) + ' °F';
//   };