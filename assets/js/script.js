var resumeEl = document.getElementById("resume");
var resumeFormEl = document.getElementById("resume-form");
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
