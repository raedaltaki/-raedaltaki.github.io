var resumeEl = document.getElementById("resume");

var downloadResume = function ()
{
    window.open(".\\assets\\resume\\Resume_Raed Altaki_Web Developer.pdf");
    // resumeEl.setAttribute("href", "..\\resume\\Resume_Raed Altaki_BELL_Software Developer.pdf");
    // resumeEl.setAttribute("download", filename);
}

resumeEl.addEventListener("click",downloadResume);