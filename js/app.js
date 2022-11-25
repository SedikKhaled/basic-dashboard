var sidebaropen=false
var sidebar=document.getElementById("side-bar")

function opensidebar () {
    if(!sidebaropen) {
        sidebar.classList.add("slide-bar-responsive")
        sidebaropen=true
    }
}


function closesidebar() {
    if(sidebaropen) {
        sidebar.classList.remove("slide-bar-responsive")
        sidebaropen=false
    }
}

function showpop() {
    document.getElementById("pup").classList.add("open")
}

function hidepop() {
    document.getElementById("pup").classList.remove("open")
}

document.querySelector(".disagree-btn").addEventListener("click",function() {
    document.querySelector("main").classList.add("see")
})
document.querySelector("#send").addEventListener("click",function() {
    document.querySelector("main").classList.remove("see")
})