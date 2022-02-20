//------------------------------ 0. 
$(document).ready(function () { respond(); });
$(window).resize(function () { respond(); });

function respond()
{
    setTimeout(function () {
        $("body").css("display", "none");
        if (Condition()) {
            $("#rsp").attr("href", "assets/css/responsive.css");
        }
        else {
            $("#rsp").attr("href", "assets/css/web.css");
        }
        $("body").css("display", "block");
    }, 2);
}
function Condition()
{
    var width = $(window).innerWidth();
    var height = $(window).innerHeight();
    var mc = MobileCheck();
     
    if (mc == "Mobile") {

        if (width < height) {
            return (width <= 980);
        }
        else {
            return (height <= 980);
        }

    }
    else {
        return (width <= 980);
    }
}
function MobileCheck() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return "Mobile";
    }
    else {
        return "Web";
    }
}

//------------------------------ 1.
function staticWeb(tag) {
    $(".mbl_menu2").css("display", "none");
    $(".mbody").scrollTop(0);
    var a = $(tag).offset().top - 60;
    $(".mbody").scrollTop(a);
} 
//------------------------------- 2.
function exp(tag) {
    var st = $(tag).attr("stt");

    if (st == "on") {
        $(tag).attr("stt", "off");
        $(tag).parent().find(".exp_itm").css("display", "none");
    }
    if (st == "off") {
        $(tag).attr("stt", "on");
        $(tag).parent().find(".exp_itm").css("display", "block");
    }
}
//---------------------------------------------- 3.
$(window).on("load", function () { alignBody() })
$(window).resize(function () { alignBody() })
function alignBody()
{
    // Body-Width
    var wt = 980;
    var w1 = 1218;
    var w2 = $(window).outerWidth();

    if (w2 <= wt) {
        // Zoom
        var z = ((w2 / wt) * 100) + "%";
        $("body").css("zoom", z);
        // Except
        z = ((wt / w2) * 100) + "%";

        $(".mbl_menu").css("zoom", z); 
        $(".mbl_menu2").css("zoom", z);
        //
    }
    else if (w2 > w1) {
        // Zoom
        var z = ((w2 / w1) * 100) + "%";
        $("body").css("zoom", z);
        // Except
        z = ((w1 / w2) * 100) + "%";

        $(".mbl_menu").css("zoom", z);
        $(".mbl_menu2").css("zoom", z);
        // 
    }
    else {
        $("body").css("zoom", "100%");
    }
    // Body-Height
    var h1 = 560;
    var h2 = $(window).outerHeight();
    // Tag-Height 
    var ht = ["height", "min-height", "max-height", "margin-top", "margin-bottom"];

    $.each(ht, (i, itm) => {
        var hc = $("*").filter(function () { return ($(this).css(itm).indexOf("vh") != -1) });

        $.each(hc, (k, item) => {
            var h = (parseFloat($(item).css(itm).replace("vh", "")) / 100) * h1 + "px";
            $(item).css(itm, h);
        });
    })
    // 
    if (MobileCheck() == "Mobile") {

        $(".mbody").parent().css("max-height", "100vh");
        $(".mbody").css("height", (h2 - 55) + "px");

        $(".dwn").css("display", "block");
        $(".viw").css("display", "none");
    }
    else {

        $(".dwn").css("display", "none");
        $(".viw").css("display", "block");

        if (w2 <= wt) {
            var zh = ((wt / w2) * h1);

            $(".mbody").parent().css("max-height", zh + "px");
            $(".mbody").css("height", (zh - 60) + "px");
        }
        else {
            $(".mbody").parent().css("max-height", "100vh");
            $(".mbody").css("height", (h2 - 55) + "px");
        }
    }
    //
}

function viewAsset(tag)
{ 
    var file = $(tag).attr("pth");
    $(tag).parent().parent().find(".emb").attr("src", file);
    //
    var rp = $(tag).attr("rp");
    if (rp != "true")
    {
        $(tag).attr("rp", "true");
        embd();
        $(window).resize(function () { embd() });
    }
    function embd() {

        // Embed Zoom
        var w1 = 1218;
        var w2 = $(window).outerWidth();
        $.each($(".emb"), (i, item) => {
            var k = $(item).attr("src");
            if (k.indexOf("zoom=") != -1) {
                $(item).css("display", "block");
                var a = k.split("zoom=")[0] + "zoom=" + (90 / 100) * parseInt((w2 / w1) * 100);
                $(item).attr("src", a);
                var b = $("<div>").html($(item).clone());
                $(item).parent().html(b.html());
                $(item).css("display", "block");
            }
        })
    }
}
function downloadAsset(tag)
{ 
    window.location.href = $(tag).attr("pth");
}

$(window).on("load", function () { grd(); });
$(window).resize(function () { grd(); });
function grd() {
    var w = $(window).outerWidth();
    if (w > 550) {
        $("#gs_1").parent().attr("name", "250.00_220.00_10.00");
        $("#gs_2").parent().attr("name", "350.00_220.00_15.00");
    }
    else {
        $("#gs_1").parent().attr("name", parseFloat((70 / 100) * w) + "_220.00_10.00");
        $("#gs_2").parent().attr("name", parseFloat((90 / 100) * w) + "_220.00_10.00");
    }
    grid_fit();
}

$(window).on("load", function () { mnu(); set_hide() });
$(window).resize(function () { mnu(); });

function set_hide() {
    var a = $(".hide_ms");
    $.each(a, (k, tag) => {
        $(tag).attr("state", "off");
        var childs = $(tag).children();
        // Is Overlay Area
        $.each(childs, (index, item) => {
            var p = $(item).attr("ignore") + "";

            if (p == "true") {
                $(item).click(function () {
                    $(tag).attr("state", "off");
                });
            }
            else {
                $(item).click(function () {
                    $(tag).attr("state", "on");
                });
            }
        });
        $(tag).click(function () {
            var state = $(this).attr("state");
            if (state == "off") {
                $(this).parent().css("display", "none");
                $(this).parent().attr("stt", "off");
            }
            else {
                $(this).attr("state", "off");
            }
        })
    });
}
function mnu() {
    var w = $(".mbl_menu2").outerWidth();
    var st = $(".mbl_menu2").attr("stt");

    if (w <= 850) {
        if (st == "on") {
            $(".mbl_menu2").css("display", "block");
        }
        if (st == "off") {
            $(".mbl_menu2").css("display", "none");
        }
    }
    else {
        $(".mbl_menu2").css("display", "none");
    }
}
function tog() {
    var st = $(".mbl_menu2").attr("stt");

    if (st == "on") {
        $(".mbl_menu2").css("display", "none");
        $(".mbl_menu2").attr("stt", "off");
    }
    if (st == "off") {
        $(".mbl_menu2").css("display", "block");
        $(".mbl_menu2").attr("stt", "on");
    }
}
// Menu Item
$(".mnu_itm").hover(function () {
    $(this).find(".mnu_dr").css("display", "block");
    $(this).find(".ttl").css("color", "#EB4343");
}).mouseleave(function () {
    $(this).find(".mnu_dr").css("display", "none");
    $(this).find(".ttl").css("color", "#1E5680");
});
// Drop Down List
$(".mnu_dr .b").hover(function () {
    $(this).css("color", "white");
    $(this).css("background-color", "#EB4343");
}).mouseleave(function () {
    $(this).css("color", "#4A4E4B");
    $(this).css("background-color", "#F6F6F6");
});