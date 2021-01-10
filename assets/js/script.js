var resumeEl = document.getElementById("resume");
var resumeFormEl = document.getElementById("resume-form");
var tempretureEl = document.getElementById("temp");
var weatherIconEl = document.getElementById("icon");
var locationEl = document.getElementById("location");
var timeEl = document.getElementById("time");
var timeoutStop;
var intervalStop;

var downloadResume = function(event)
{
    event.preventDefault();
//     //resumeEl.setAttribute("download",".\\assets\\resume\\Resume_Raed Altaki_Web Developer.pdf");
//     //window.open("./assets/resume/Resume_Raed Altaki_Web Developer.pdf");
    windows.location.href = "./assets/resume/Resume_Raed Altaki_Web Developer.pdf";

 }

var colorChange = function ()
{
    resumeEl.style.background = 'grey';
    resumeEl.style.color = 'white';
    timeoutStop = setTimeout("resumeEl.style.background = 'white'; resumeEl.style.color = 'black';",500);
}

var buttonMouseOver = function()
{
    clearTimeout(timeoutStop);
    clearInterval(intervalStop);
    resumeEl.style.background = 'grey';
    resumeEl.style.color = 'white';
}

var buttonMouseLeave = function()
{
    intervalStop = setInterval(colorChange,1000);
    timeoutStop = setTimeout("resumeEl.style.background = 'white'; resumeEl.style.color = 'black';",500);
}

var weather = function(lon,lat)
{
    console.log("lon",lon,"lat",lat);
    var todayWeatherURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=274cbbc7cb2cf2adbf2edf074233aaec&lat="+lat+"&lon="+lon;
    fetch(todayWeatherURL)
        .then(function(response)
        {
            if(response.ok)
            {
                response.json().then(function(data)
                {
                    weatherIconEl.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
                    tempretureEl.textContent = data.main.temp + "°F";
                    locationEl.textContent = data.name + ", " + data.sys.country;
                })
            }
            else
            {
                alert("Error: Cannot find the coordination for entered city");
            }
        })
        .catch(function(error)
        {
            alert("Error: Cannot connect to the server.\n          Please check your Internet connection.");
        })
}

function getLocation() 
{
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition( function(position)
    {
        var lat = position.coords.latitude
        var lon = position.coords.longitude
        timeEl.textContent = moment(position.timestamp,"x").format("LT");
        weather(lon,lat);
    });
  } 
  else 
  { 
    alert("Geolocation is not supported by this browser.");
  }
}


getLocation();

intervalStop = setInterval(colorChange,1000);

//resumeFormEl.addEventListener("submit",downloadResume);
resumeEl.addEventListener("mouseover", buttonMouseOver);
resumeEl.addEventListener("mouseleave",buttonMouseLeave);

setInterval(function(){$( "#resume" ).effect( "shake", "slow" );},3000);
$("#intro-body").hide();
$("#skills").hide();
$("#about-me").hide();
$("#projects").hide();
$("#contact").hide();

$( "#intro-body" ).show( "drop", 1500 );
setTimeout(function(){ $( "#skills" ).show( "drop", 1500 );},500);
setTimeout(function(){ $( "#about-me" ).show( "drop", 1500 );},1000);
setTimeout(function(){ $( "#projects" ).show( "drop", 1500 );},1500);
setTimeout(function(){ $( "#contact" ).show( "drop", 1500 );},2000);
// $(".my-image").show( "fade", 2000 );
