var nav1;
var nav2;
var nav3;



function NavClicked(clicked)
{
    var nav1 = document.getElementById('nav1');
    var nav2 = document.getElementById('nav2');
    var nav3 = document.getElementById('nav3');

    var clicked;

    if (clicked == 1)
    {
        console.log("Nav1_Clicked")
        nav1.style.background = "white";
        nav2.style.background = "transparent";
        nav3.style.background = "transparent";
    }
    if (clicked == 2)
    {
        console.log("Nav2_Clicked")
        nav1.style.background = "transparent";
        nav2.style.background = "white";
        nav3.style.background = "transparent";
    }
    if (clicked == 3)
    {
        console.log("Nav3_Clicked")
        nav1.style.background = "transparent";
        nav2.style.background = "transparent";
        nav3.style.background = "white";
    }
}

