let wrapper = document.getElementById("sidebarwrap")
let sidebar = document.getElementById("mobilenavsidebar")

function openMNav(){
    wrapper.classList.add("shownav")
    sidebar.classList.add("shownav")
}

function closeMNav(){
    setTimeout(function(){
        wrapper.classList.remove("shownav")
    },600)
    sidebar.classList.remove("shownav")
}