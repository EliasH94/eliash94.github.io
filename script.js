/*Toggle between adding and removing the "responsive" class to topNav when the user clicks on the icon*/
function myFunction() {
    const x = document.getElementById("myTopNav");
    const isClosed = x.className === "topNav";
    if (isClosed) {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

function myImage() {
    var img = document.createElement("IMG");
    img.setAttribute("src", "dance.gif")
    img.setAttribute("width", "304");
    img.setAttribute("height", "228");
    img.setAttribute("alt", "html4");
    document.body.appendChild(img);
}
