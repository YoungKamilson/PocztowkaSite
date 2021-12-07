window.onload = PrepareLoadingScreen();

function PrepareLoadingScreen() 
{
    window.setTimeout(ShowLoadedPage, 2000);
}
function ShowLoadedPage() 
{
    window.location.href = "index2.html";
}
