/*
    Thubakgale MS - 201701870
    27-10-2021
 */
//----------------------------------------------------- Onload 

$(window).on("load", function () { slide_fit() });
$(window).resize(function () { slide_fit(); });
// Methods
function grid_fit() {
    try
    {
        var a = $(".grid");

        $.each(a, (index, item) =>
        {
            var col = 0; var ht = 0; var gap = 0;

            var wid = $(item).outerWidth();
            var hit = $(window).height();

            if (typeof ($(item).attr("name")) != "undefined")
            { 
                var b = $(item).attr("name").split("_");
                if (b.length != 0) {
                    if ($(item).hasClass("prc")) {
                        col = parseFloat(b[0]) * wid / 100.00;
                        ht = parseFloat(b[1]) * wid / 100.00;
                        gap = parseFloat(b[2]) * wid / 100.00;
                    }
                    if ($(item).hasClass("pxl")) {
                        col = b[0];
                        ht = b[1];
                        gap = b[2];
                    }
                    if ($(item).hasClass("pvh")) {
                        col = b[0];
                        ht = parseFloat(b[1]) * hit / 100.00;
                        gap = b[2];
                    }

                    $(item).find("div:first").css("grid-gap", gap + "px");
                    $(item).find("div:first").css("padding-top", gap + "px");
                    $(item).find("div:first").css("padding-bottom", gap + "px");
                    $(item).find("div:first").css("display", "grid");
                    $(item).find("div:first").css("grid-template-columns", "repeat(auto-fit, minmax(" + col + "px, " + col + "px))");
                    $(item).find("div:first").css("justify-content", "center");

                    $(item).find(".grid_c").css("width", col + "px");
                    $(item).find(".grid_c").css("min-height", ht + "px");
                }
            } 
        })
 
    } catch { }
}; 

function slide_fit() {
    var fxd = $("*").filter(function () { return $(this).hasClass("sld_cnt") });
    $.each(fxd, (index, item) => {
        var a = parseFloat("" + $(item).outerWidth());
        var b = $(window).outerHeight();

        var b1 = parseFloat($(item).attr("name").split("_")[0]);
        var b2 = parseFloat($(item).attr("name").split("_")[1]);

        var b3 = a / b2;
        var b4 = 0;

        if ($(item).hasClass("pvh")) {
            b4 = b * b1 / 100.00;
        }
        if ($(item).hasClass("pxl")) {
            b4 = b1;
        }


        $(item).find(".sld_ct").css("width", a + "px");
        $(item).find(".sld_cn").css("width", a + "px");

        $(".sld_itm").css("min-width", b3 + "px");

        if ($(item).hasClass("pxl")) {
            $(".sld_itm").css("min-height", b4 + "px");
            $(item).css("min-height", b4 + "px");
        }
        if ($(item).hasClass("pin"))
        {
            var h = $(item).parent().css("min-height"); 
            $(".sld_itm").css("height", h);
            $(item).css("height", h );
            $(item).find(".pin_h").css("height", h );
            $(item).find(".pin_h").css("width", "100%");
        }
        //

        if ($(item).find(".arr1").length != 0)
        {
            var c1 = parseInt((a * 10 / 200) + "");
            var c2 = parseInt((a / 80) + "");
            var c3 = parseInt((a / 100) + "");

            $(item).find(".arr1").css("font-size", c1 + "px");
            $(item).find(".arr1").css("margin-left", -(c1 + c2) + "px");
            $(item).find(".arr1").css("padding", c3 + "px");

            $(item).find(".arr2").css("font-size", c1 + "px");
            $(item).find(".arr2").css("margin-left", c2 + "px");
            $(item).find(".arr2").css("padding", c3 + "px");

            var d1 = $(item).find(".arr1").outerHeight();
            var d2 = (b4 / 2) - (d1 / 2);

            $(item).find(".arr1").css("top", d2 + "px");
            $(item).find(".arr2").css("top", d2 + "px");
        } 
    });
}  
function tms(param1, param2, param3)
{ 
    var a = $("." + param1).children(":first").offset().left;
    var b = $("." + param1).children(":first").next().offset().left;
    var c = b - a;
    var d = $("." + param1).children().length * c;
    var e = $("." + param1).parent().scrollLeft();
    var g = 0;
     
    if (param2 == '-') {
        var f = parseInt(($("." + param1).children().length - e / c).toFixed(0)) + 1;
        g = d - f * c;
    }
    if (param2 == '+') {
        var f = parseInt((1 + e / c).toFixed(0));
        g = f * c;
    }

    if (0 < g < d) {
        $("." + param1).parent().animate({ scrollLeft: g }, param3 * 1000.00);
    }
}; 
//