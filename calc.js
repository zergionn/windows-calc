$(function () {
    price_izd = 100;
    price_izd_adv = 0;
    price_adv = 0;
    price_montazh = 0;
    price_otkosy = 0;
    price_mosk = 0;
    $("#slider").slider({
        value: 50,
        min: 50,
        max: 140,
        step: 10,
        slide: function (event, ui) {
            $("#amount").val(ui.value + " см");
            $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((ui.value) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            $("#izd").val(Math.ceil(((ui.value) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4) + price_izd);
        }
    });

    $("#slider-vertical").slider({
        orientation: "vertical",
        min: 70,
        max: 190,
        value: 70,
        step: 10,
        slide: function (event, ui) {
            $("#amount2").val(ui.value + " см");
            $("#total_price").val(Math.ceil(price_adv + price_izd_adv + price_izd + ((ui.value) / 10) * 4 + ((+$("#slider").slider("value")) / 10) * 4));
            $("#izd").val(Math.ceil(((+$("#slider").slider("value")) / 10) * 4 + ((ui.value) / 10) * 4) + price_izd);
        }
    });

    $("#amount").val($("#slider").slider("value") + " см");
    $("#amount2").val($("#slider-vertical").slider("value") + " см");
    $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
    $("#izd").val(Math.ceil(((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4) + price_izd);
    $("#montazh2").val(price_montazh);
    $("#otkosy2").val(price_otkosy);
    $("#mosk2").val(price_mosk);

    function handleToggle(e) {
        var target = $(e.target);

        if (target.is("#montazh")) {
            if (target.is(":checked")) {
                price_adv += 20;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                price_montazh += 20;
                $("#montazh2").val(price_montazh);
            }
            else {
                price_adv -= 20;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                price_montazh -= 20;
                $("#montazh2").val(price_montazh);
            }
        }
        if (target.is("#otkosy")) {
            if (target.is(":checked")) {
                price_adv += 40;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                price_otkosy += 40;
                $("#otkosy2").val(price_otkosy);
            }
            else {
                price_adv -= 40;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                price_otkosy -= 40;
                $("#otkosy2").val(price_otkosy);
            }
        }
        if (target.is("#mosk_setka")) {
            if (target.is(":checked")) {
                price_adv += 10;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                price_mosk += 10;
                $("#mosk2").val(price_mosk);
            }
            else {
                price_adv -= 10;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                price_mosk -= 10;
                $("#mosk2").val(price_mosk);
            }
        }

        if (target.is("#1stv_gl")) {
            if (target.is(":checked")) {
                price_izd_adv = 0;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#1stv_pov")) {
            if (target.is(":checked")) {
                price_izd_adv = 20;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#1stv_pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 30;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }

        }
        if (target.is("#2stv_gl")) {
            if (target.is(":checked")) {
                price_izd_adv = 0;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#2stv_1pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 25;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#2stv_1pov_1pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 55;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#2stv_2pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 75;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#3stv_gl")) {
            if (target.is(":checked")) {
                price_izd_adv = 0;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#3stv_1pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 45;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#3stv_1pov_1pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 75;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
        if (target.is("#3stv_2pov_otk")) {
            if (target.is(":checked")) {
                price_izd_adv = 125;
                $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
                $("#izd").val(Math.ceil(price_izd + price_izd_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
            }
        }
    }

    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");

    $('#tab1').click(function () {
        price_izd = 100;
        $("#windows_div").css({background:'url(1stv_gl.jpg) center', width:'243px'});
        $("#slider-vertical").slider({min: 70, value: 70, max: 190});
        $("#amount2").val(70 + " см");
        $("#slider").slider({min: 50, value: 50, max: 140});
        $("#slider").css('width', $("#windows_div").css('width'));
        $("#win_width").css('width', $("#windows_div").css('width'));
        $("#win_width_text").css('width', $("#windows_div").css('width'));
        $("#amount").val(50 + " см");
        $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
        $("#izd").val(Math.ceil(((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4) + 100);
    });

    $('#tab2').click(function () {
        price_izd = 150;
        $("#windows_div").css({background:'url(2stv_gl.jpg) center', width:'379px'});
        $("#slider-vertical").slider({min: 100, value: 100, max: 190});
        $("#amount2").val(100 + " см");
        $("#slider").slider({min: 80, value: 80, max: 210});
        $("#slider").css('width', $("#windows_div").css('width'));
        $("#win_width").css('width', $("#windows_div").css('width'));
        $("#win_width_text").css('width', $("#windows_div").css('width'));
        $("#amount").val(80 + " см");
        $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
        $("#izd").val(Math.ceil(((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4) + 150);
    });

    $('#tab3').click(function () {
        price_izd = 200;
        $("#windows_div").css({background:'url(3stv_gl.jpg) center', width:'441px'});
        $("#slider-vertical").slider({min: 100, value: 100, max: 190});
        $("#amount2").val(100 + " см");
        $("#slider").slider({min: 160, value: 160, max: 300});
        $("#slider").css('width', $("#windows_div").css('width'));
        $("#win_width").css('width', $("#windows_div").css('width'));
        $("#win_width_text").css('width', $("#windows_div").css('width'));
        $("#amount").val(160 + " см");
        $("#total_price").val(Math.ceil(price_izd + price_izd_adv + price_adv + ((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4));
        $("#izd").val(Math.ceil(((+$("#slider").slider("value")) / 10) * 4 + ((+$("#slider-vertical").slider("value")) / 10) * 4) + 200);
    });

    $(".toggles").controlgroup({
        direction: "vertical"
    });
    $(".toggle").on("change", handleToggle);
    $("[name='brand']").on("change", handleToggle);
    $(".brand").controlgroup({
        direction: "vertical"
    });
});