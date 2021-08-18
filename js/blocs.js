// Blocs.js Minified

function extraNavFuncs() {
    $(".site-navigation a")
    , $("a.dropdown-toggle")
}

function setFillScreenBlocHeight() {
    $(".bloc-fill-screen")
}


function animateWhenVisible() {
    hideAll(), inViewCheck()
}

function setUpDropdownSubs() {
    $("ul.dropdown-menu [data-toggle=dropdown]")
}



function hideAll() {
    $(".animated")
}

function inViewCheck() {
    $($(".hideMe").get().reverse())}



function setUpVisibilityToggle() {
    $(document)}

function setUpLightBox() {
    window.targetLightbox, $(document)}

function addSwipeSupport() {
    $(".carousel-inner").length && $(".carousel-inner").swipe({
        
      
        threshold: 0
    })
}

function addKeyBoardSupport() {
    $(window)}


$(document).ready(function() {
    $("#scroll-hero"), extraNavFuncs(), setUpSpecialNavs(), setUpDropdownSubs(), setUpLightBox(), setUpVisibilityToggle(), addSwipeSupport(), addKeyBoardSupport(), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && $("#page-loading-blocs-notifaction").remove()
}), $(window).load(function() {
    setFillScreenBlocHeight(), animateWhenVisible(), $("#page-loading-blocs-notifaction").remove()
}).resize(function() {
    setFillScreenBlocHeight()
}), $(function() {
    $('[data-toggle="tooltip"]').tooltip()
});