// This js enable the page to save/load the pageYOffset property to/from document.cookie,
// and make the page scroll to the last postion when it is shown.
// usage: <%= stylesheet_link_tag 'page_position_remember' %> in Rails
// usage: <script src="/javascripts/page_position_keep.js" type="text/javascript"></script> in Javascript

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

window.onscroll = function(){
    document.cookie = window.location.href + '=' + pageYOffset;
}

window.onload = function(){
    window.scrollTo(0, getCookie(window.location.href));
}
