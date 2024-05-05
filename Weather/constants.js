let nameElement = document.getElementById("city");
let weatherElement = document.getElementById("weather");
let tempElement = document.getElementById("temp");

const apiKey = "YOUR_API_KEY";


function setFields(data){
    if(data.code==200){
        nameElement.innerHTML =  data.data.name;
        weatherElement.innerHTML = data.data.weather[0].main;
        tempElement.innerHTML = data.data.main.temp+"°C";
    }else{
        nameElement.innerHTML = "Error :"+data.message;
        weatherElement.innerHTML="";
        tempElement.innerHTML = "";
    }
}

function getUrl(city){
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
}

export {getUrl , setFields} ;
