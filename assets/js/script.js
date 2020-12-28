var resumeEl = document.getElementById("resume");
var timeoutStop;
var intervalStop;

var downloadResume = function ()
{
    window.open(".\\assets\\resume\\Resume_Raed Altaki_Web Developer.pdf");
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

resumeEl.addEventListener("click",downloadResume);
resumeEl.addEventListener("mouseover", buttonMouseOver);
resumeEl.addEventListener("mouseleave",buttonMouseLeave);