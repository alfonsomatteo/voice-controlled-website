//GENERAL VAR
var menuHeight;
var footer;
var stickyfooter;

var canMenuClick = true;


//
// IE DETECT for flip
//
var version = detectIE();

if (version === false) { //not ie
    $(".ie-only").addClass("hideme");
    //console.log("not ie");
} else {
    $(".not-for-ie").addClass("hideme");
    //console.log("ie");
}


/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
}

$(document).ready(function() {


    $(".b_header .b_header_hamburger").remove();


    $(".b_content", ".b_wrapper").addClass("loaded");
});