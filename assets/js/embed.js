$(window).on("load", function () { setEmbed() })
$(window).resize(function () { setEmbed() })

function setEmbed() {

    var s = $(".svg");
    $.each(s, (k, item) => {
        try {

            var bg = $(item).attr("bg"); 
            $(item).parent().css("background-color", bg);
            $(item).parent().css("overflow", "hidden");

            var w1 = $(window).outerWidth();
            var w2 = $(item).outerWidth();

            if (w1 < w2) {
                var z = ((w1 / w2) * 100) + "%";
                $(item).css("zoom", z);
            }
            else {
                $(item).css("zoom", "100%");
            }
        }
        catch {}
    })
}

$(window).on("load", function () { setEmbed2() })
$(window).resize(function () { setEmbed2() })
function setEmbed2() {
    var s = $(".emb");
    $.each(s, (k, item) => {
        try {

            $(item).css("width", "100%");

            var n = $(item).attr("pg");
            var x = $(item).attr("wd");
            var y = (parseInt(n)*parseInt($(item).attr("ht").replace("pt", "")))+"pt";

            var w1 = (0.75) * $(window).outerWidth();
            var w2 = parseInt(x.replace("pt", ""));

            if (w1 < w2) {
                var h = (w1 / w2) * parseInt(y.replace("pt", "")) + "pt";
                $(item).css("height", h);
            }
            else {
                $(item).css("height", y);
            }
        }
        catch {

        }
    })
}