// Skill Progress

function skillprogress() {
    document.getElementById("progress-bar1").style.width = "85%";
    document.getElementById("progress-bar2").style.width = "70%";
    document.getElementById("progress-bar3").style.width = "85%";
    document.getElementById("progress-bar4").style.width = "60%";
    document.getElementById("progress-bar5").style.width = "70%";
    document.getElementById("progress-bar6").style.width = "50%";
    document.getElementById("progress-bar7").style.width = "50%";
    document.getElementById("progress-bar8").style.width = "50%";
}

// Skill Progress Ends

//responsive Navbar
function toggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Scroll to top
function scrollWin() {
    window.scrollTo(0, 0);
}


// Back To Top
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
        document.getElementById("myBtn").style.display = "block";
        // document.getElementById("navbar").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
        // document.getElementById("navbar").style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}