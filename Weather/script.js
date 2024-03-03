import {getUrl,setFields} from "./constants.js";


document.getElementById('location-form').addEventListener('submit', getWeather);


async function getWeather(e) {
  //Write you code logic here
  e.preventDefault();
  // Error should be very specific
  // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.
  
  let city = "";
  city = document.getElementById("input").value;

  if(city==""){

  }else{
    city = city.toLowerCase();
    const url = getUrl(city);
    try{
      const data = await getData(url);
      setFields(data);
    }catch(e){
      console.log(e);
    } 
  }

}


async function getData(url){
  const response = await fetch(url)
  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    return {code:200,
            data:json
          }
  } else {
    //alert("HTTP-Error: " + response.status);
    let json = await response.json();
    return json
  }
}
