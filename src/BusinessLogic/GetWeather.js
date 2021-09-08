var $ = jQuery = require("jquery")
const remote = require('@electron/remote')
closeApp.addEventListener("click",function(){
    if (confirm('You are about to exit ')) {
    let window = remote.getCurrentWindow()
    window.close()
    }
    else
    {

    }
 
})
const cityForm=document.querySelector("#weatherForm");

// $("document").ready(function(){
// $("#HeaderRegion").load("Header/header.html")
// });

document.addEventListener("DOMContentLoaded",(e)=>{

    $(document).keypress(
        function(event){
          if (event.which == '13') {
            event.preventDefault();
          }
      });

cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(document.getElementById("city").value !=="")
    {
        console.log(document.getElementById("city").value)
        let conditionDiv =document.querySelector("#conditions");
            if(conditionDiv)
            {
                document.querySelector("main").removeChild(conditionDiv);
            };
            getWeatherConditions(document.getElementById("city").value)
    }
    else
    {
      alert("You Must Provide a city name")
    }
})


});


const getWeatherConditions =async(city)=>{
    await fetch(`http://api.weatherstack.com/current?access_key=53cb4f29aa1125219a83df7fa8374452&query=${city}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        let div=document.createElement("div");
        div.setAttribute("id","conditions");
        let img=document.createElement("img");
        img.setAttribute("src",data.current.weather_icons[0]);
        img.setAttribute("loading","lazy");
        let weatherDesc=document.createElement("h4");
        let weatherDescNode=document.createTextNode(data.current.weather_descriptions[0]);

        weatherDesc.appendChild(weatherDescNode);


        let city=document.createElement("h2");
        let cityNode=document.createTextNode(data.request.query);
        city.appendChild(cityNode);

        let temp=document.createElement("div");

        let tempNode=document.createTextNode(data.current.temperature + "°C");
        temp.appendChild(tempNode);

        div.appendChild(img);
        div.appendChild(weatherDesc)
        div.appendChild(city);
        div.appendChild(temp);

        document.querySelector("main").appendChild(div);



    }).catch(err=>console.log(err))

}




next.addEventListener('click',function() {
    location.href="../Views/index.html"
})