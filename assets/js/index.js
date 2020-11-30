$( document ).ready(function() {
    let ele = document.getElementById("downsprite")
    document.onscroll = function(){
        //fix this function
        if(isScrolledIntoView()){
            
            ele.classList.add("transparent")
            setTimeout(function(){
                if(ele.classList.contains("transparent")){
                    ele.classList.add("hidden")
                }
            },333)
        } else if (isScrolledOutOfView()) {
            if(ele.classList.contains("hidden")){
                ele.classList.remove("hidden")
            }
            setTimeout(function(){
                if(!ele.classList.contains("hidden")){
                    ele.classList.remove("transparent")
                }
            },4)
        }
    };
});


function scrolltobottom() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#savealife-titletext").offset().top
    }, 1000);
}

function isScrolledIntoView()
{
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $("#savealife-titletext").offset().top;

    return (elemTop <= docViewBottom);
}

function isScrolledOutOfView()
{
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $("#savealife").offset().top;

    return (elemTop > docViewBottom);
}