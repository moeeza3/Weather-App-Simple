let searchData=document.getElementById("search");
let btnSearch=document.getElementById("show");
let cityName=document.getElementById("city-name");
let cityTemp=document.getElementById("city-temp");
let cityWeatherStatus=document.getElementById("city-weather-status");
let cityfeel=document.getElementById("city-feel");
let citypressure=document.getElementById("city-pressure");
let cityhumidity=document.getElementById("city-humidity");
let citywind=document.getElementById("city-wind");
let weatherimg=document.getElementById("weather-img");


window.addEventListener("load",withbrwoserlocation=()=>{

    if(navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition(me=(showpos)=>{
    var lating=showpos.coords.latitude;
    var longing=showpos.coords.longitude;

   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lating}&lon=${longing}&units=metric&appid=ac3673a8887645fc3d0493904a348e03`)
        .then(response=> response.json())
        .then(data=>{
            var name=data.name;
    cityName.innerHTML=name;
    cityWeatherStatus.innerHTML=data.weather[0].main;
  var temp=data.main.temp;
  cityTemp.innerHTML=temp;
  cityfeel.innerHTML=data.main.feels_like;
  citypressure.innerHTML=data.main.pressure;
  cityhumidity.innerHTML=data.main.humidity;
  citywind.innerHTML=data.wind.speed;
   var id=data.weather[0].id;
   if(id>=200 && id<300){
    // weatherimg.src='image/11d@2x.png';
    // weatherimg.alt='ThunderStorm';
    weatherimg.setAttribute("class","fa-solid fa-cloud-bolt");
    weatherimg.classList.add("icon");
  }else if(id>=500 && id<600){
    // weatherimg.src='image/10d@2x.png';
    // weatherimg.alt='Rain';
    weatherimg.setAttribute("class","fa-solid fa-cloud-rain");
    weatherimg.classList.add("icon");
  }else if(id>=600 && id<700){
    // weatherimg.src='image/13d@2x.png';
    // weatherimg.alt='Snow';
    weatherimg.setAttribute("class","fa-solid fa-snowflake");
    weatherimg.classList.add("icon");
  }else if(id==800){
    // weatherimg.src='image/01d@2x.png';
    // weatherimg.alt='Snow';
    weatherimg.setAttribute("class","fa-solid fa-sun");
  weatherimg.classList.add("icon");
  }else if(id>=801 && id<804){
    //   weatherimg.src='image/03d@2x.png';
//   weatherimg.alt='cloud';
   weatherimg.setAttribute("class","fa-solid fa-cloud");
   weatherimg.classList.add("icon");
  }
        })

    })
    }

})

btnSearch.addEventListener("click",(e)=>{
  e.preventDefault();
   var d=searchData.value;
 
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${d}&units=metric&appid=ac3673a8887645fc3d0493904a348e03`)
.then((response)=>{
  return response.json();
})
.then((data)=>{
  
   var name=data.name;
    cityName.innerHTML=name;
    cityWeatherStatus.innerHTML=data.weather[0].main;
  var temp=data.main.temp;
  cityTemp.innerHTML=temp;
  cityfeel.innerHTML=data.main.feels_like;
  citypressure.innerHTML=data.main.pressure;
  cityhumidity.innerHTML=data.main.humidity;
  citywind.innerHTML=data.wind.speed;
   var id=data.weather[0].id;
   if(id>=200 && id<300){
    // weatherimg.src='image/11d@2x.png';
    // weatherimg.alt='ThunderStorm';
    weatherimg.setAttribute("class","fa-solid fa-cloud-bolt");
    weatherimg.classList.add("icon");
  }else if(id>=500 && id<600){
    // weatherimg.src='image/10d@2x.png';
    // weatherimg.alt='Rain';
    weatherimg.setAttribute("class","fa-solid fa-cloud-rain");
    weatherimg.classList.add("icon");
  }else if(id>=600 && id<700){
    // weatherimg.src='image/13d@2x.png';
    // weatherimg.alt='Snow';
    weatherimg.setAttribute("class","fa-solid fa-snowflake");
    weatherimg.classList.add("icon");
  }else if(id==800){
    // weatherimg.src='image/01d@2x.png';
    // weatherimg.alt='Snow';
    weatherimg.setAttribute("class","fa-solid fa-sun");
  weatherimg.classList.add("icon");
  }else if(id>=801 && id<804){
    //   weatherimg.src='image/03d@2x.png';
//   weatherimg.alt='cloud';
   weatherimg.setAttribute("class","fa-solid fa-cloud");
   weatherimg.classList.add("icon");
  }
  
  
})
.catch((error)=>{
  console.log(error);
});
});
