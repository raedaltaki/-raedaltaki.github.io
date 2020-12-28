var resumeEl = document.getElementById("resume");

var downloadResume = function ()
{
    window.open(".\\assets\\resume\\Resume_Raed Altaki_Web Developer.pdf");
    // resumeEl.setAttribute("href", "..\\resume\\Resume_Raed Altaki_BELL_Software Developer.pdf");
    // resumeEl.setAttribute("download", "..\\resume\\Resume_Raed Altaki_BELL_Software Developer.pdf");
}

var colorChange = function ()
{
    resumeEl.style.background = "grey";
    resumeEl.style.color = 'white';
    setTimeout("resumeEl.style.background = 'white'; resumeEl.style.color = 'black';",500);
}

// var ColorWhite = function ()
// {
    
// }

setInterval(colorChange,1000);

resumeEl.addEventListener("click",downloadResume);