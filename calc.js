$(function () {
    price_izd_start = 60; 
    price_izd_stv = 0; 
    price_izd_percent = 0; 
    price_one_stv = 50;
    price_montazh = 0;
    price_otkosy = 0;
    price_mosk = 0;
    price_podokonnik = 0;
    price_otliv = 0;
    price_laminat = 0;
    price_montazh_start = 50;
    price_otkosy_start = 50;
    price_mosk_start = 17;
    price_podokonnik_start = 17;
    price_otliv_start = 10;
    price_laminat_start = 0.2;
    price_izd_furnitura = 0;
    price_izd_steklopaket = 0;
    price_izd_profil = 0;
    percent_slider = 0.017;
    profil_index = 0;
    b_bl_active_state = false;
    slider_podokonnik = 0;
    slider_otliv = 0;
    
    $("#slider").slider({
        animate: "fast",
        value: 50,
        min: 50,
        max: 140,
        step: 10,
        slide: function (event, ui) {
            $("#amount").val(ui.value + " см");
            slider_h_val = ui.value;
            a2 = +$("#slider-vertical").slider("value");
            get_sliders_values(a2,ui.value,0,0);
            calc_price_izd_percent();
            calc_montazh_price(ui.value, slider_vert_val);
            calc_otkosy_price(ui.value, slider_vert_val);
            calc_mosk_price(ui.value, slider_vert_val);
            calc_podokonnik_price(ui.value, slider_vert_val);
            calc_otliv_price(ui.value, slider_vert_val);
            calc_laminat_price(ui.value, slider_vert_val);
            calc_total_price();
            calc_izd_price();
        }
    });

    $("#slider-vertical").slider({
        animate: "fast",
        orientation: "vertical",
        min: 70,
        max: 190,
        value: 70,
        step: 10,
        slide: function (event, ui) {
            $("#amount2").val(ui.value + " см");
            slider_vert_val = ui.value;
            b2 = +$("#slider").slider("value");
            get_sliders_values(ui.value,b2,0,0);
            calc_price_izd_percent();
            calc_montazh_price(slider_h_val, ui.value);
            calc_otkosy_price(slider_h_val, ui.value);
            calc_mosk_price(slider_h_val, ui.value);
            calc_laminat_price(slider_h_val, ui.value);
            calc_total_price();
            calc_izd_price();
        }
    });

    $("#1stv_tab").attr('href', location.pathname + '#1stv');
    $("#2stv_tab").attr('href', location.pathname + '#2stv');
    $("#3stv_tab").attr('href', location.pathname + '#3stv');
    $("#b_bl_tab").attr('href', location.pathname + '#b_bl');
    
    $("#tabs").tabs();
    
    $("#1stv_tab").click();
    $( "#tabs li" ).removeClass( "ui-corner-top" );
    $( "#tabs li" ).removeClass( "ui-corner-bottom" );

    $( ".furnitura" ).controlgroup({
        direction: "vertical"
    });
    $( ".profil" ).controlgroup({
        direction: "vertical"
    });

    $( ".steklopaket" ).controlgroup({
        direction: "vertical"
    });
    $("#windows_div").css({background:'url(img/1stv_gl.jpg) center', width:'160px'});
    $("#amount").val($("#slider").slider("value") + " см");
    $("#amount2").val($("#slider-vertical").slider("value") + " см");
    $("#montazh2").val(0);
    $("#otkosy2").val(0);
    $("#mosk2").val(0);
    $("#podokonnik2").val(0);
    $("#otliv2").val(0);
    $("#laminat2").val(0);
    $(".toggle").prop("checked", false);
    $("#furnitura").selectmenu();
    $('#furnitura').prop('selectedIndex',0);
    $("#steklopaket").selectmenu();
    $("#steklopaket").prop('selectedIndex',0);
    $("#profil").selectmenu();
    $("#profil").prop('selectedIndex',0);
    draw_b_bl_sliders();
    hide_b_bl_sliders();
    a3 = +$("#slider-vertical").slider("value");
    b3 = +$("#slider").slider("value");
    get_sliders_values(a3,b3,0,0);
    calc_total_price();
    calc_izd_price();

    function handleToggle(e) {
        var target = $(e.target);

        if (target.is("#montazh")) {
            recalc();
        }
        if (target.is("#otkosy")) {
            recalc();
        }
        if (target.is("#mosk")) {
            recalc();
        }
        if (target.is("#podokonnik")) {
            recalc();
        }
        if (target.is("#otliv")) {
            recalc();
        }

        if (target.is("#laminat")) {
            recalc();
        }

        if (target.is("[name='brand']")){
            set_windows_type(target, target.data('stvCount'), target.data('img'));
        }

        if (target.is("[name='furnitura']")){
            set_furnitura_type(target, target.data('furnituraPrice'));
        }

        if (target.is("[name='profil']")){
            set_profil_type(target, target.data('profilPrice'));
        }

        if (target.is("[name='steklopaket']")){
            set_steklopaket_type(target, target.data('steklopaketPrice'));
        }
    }

    function set_windows_type(window, count_of_stv, img){
        if (window.is(":checked")) {
            price_izd_stv = price_one_stv * count_of_stv;
            $("#windows_div").css({background:'url(img/' + img + ') center'});
            get_current_sliders_values();
            calc_laminat_price(slider_h_val, slider_vert_val);
            calc_total_price();
            calc_izd_price();
        }
    }

    function set_furnitura_type(furnitura, furnituraPrice){
        if (furnitura.is(":checked")) {
            price_izd_furnitura = furnituraPrice;
            calc_total_price();
            calc_izd_price();
        }
    }

    function set_profil_type(profil, profilPrice){
        if (profil.is(":checked")) {
            price_izd_profil = price_izd_start * (profilPrice/100);
            get_current_sliders_values();
            calc_laminat_price(slider_h_val, slider_vert_val);
            calc_total_price();
            calc_izd_price();
        }
    }

    function set_steklopaket_type(steklopaket, steklopaketPrice){
        if (steklopaket.is(":checked")) {
            price_izd_steklopaket = price_izd_start * (steklopaketPrice/100);
            calc_izd_price();
            calc_total_price();
        }
    }

    function draw_b_bl_sliders(){
        $(".sliders_win").css({display: 'none'});
        $(".sliders_d").css({display: 'flex'});

        $("#slider_h_b_bl").slider({
            animate: "fast",
            min: 50,
            max: 200,
            value: 50,
            step: 10,
            slide: function(event,ui){
                $("#amount_h_b_bl").val(ui.value + " см");
                a1 = +$("#slider_v_b_bl_d").slider("value");
                b1 = +$("#slider_h_b_bl_d").slider("value");
                c1 = +$("#slider_v_b_bl").slider("value");
                d1 = ui.value;   
                get_sliders_values(a1,b1,c1,d1);
                calc_price_izd_percent();
                calc_montazh_price(slider_h_val, slider_vert_val);
                calc_otkosy_price(slider_h_val, slider_vert_val);
                calc_mosk_price(slider_h_val, slider_vert_val);
                calc_podokonnik_price(slider_h_val, slider_vert_val);
                calc_otliv_price(slider_h_val, slider_vert_val);
                calc_laminat_price(slider_h_val, slider_vert_val);
                calc_total_price();
                calc_izd_price();
            }
        });

        $("#slider_v_b_bl").slider({
            animate: "fast",
            orientation: "vertical",
            min: 90,
            max: 200,
            value: 90,
            step: 10,
            slide: function(event,ui){
                $("#amount_v_b_bl").val(ui.value + " см");
                $("#amount_v_b_bl_d").val(ui.value + " см");
                $("#slider_v_b_bl_d").slider({min: ui.value, value: ui.value, max: ui.value + 150});
                a1 = +$("#slider_v_b_bl_d").slider("value");
                b1 = +$("#slider_h_b_bl_d").slider("value");
                c1 = ui.value;
                d1 = +$("#slider_h_b_bl").slider("value");   
                get_sliders_values(a1,b1,c1,d1);
                calc_price_izd_percent();
                calc_montazh_price(slider_h_val, slider_vert_val);
                calc_otkosy_price(slider_h_val, slider_vert_val);
                calc_mosk_price(slider_h_val, slider_vert_val);
                calc_laminat_price(slider_h_val, slider_vert_val);
                calc_total_price();
                calc_izd_price();
            }
        });

        $("#slider_h_b_bl_d").slider({
            animate: "fast",
            min: 50,
            max: 120,
            value: 50,
            step: 10,
            slide: function(event,ui){
                $("#amount_h_b_bl_d").val(ui.value + " см");
                a1 = +$("#slider_v_b_bl_d").slider("value");
                b1 = ui.value;
                c1 = +$("#slider_v_b_bl").slider("value");
                d1 = +$("#slider_h_b_bl").slider("value");   
                get_sliders_values(a1,b1,c1,d1);
                calc_price_izd_percent();
                calc_montazh_price(slider_h_val, slider_vert_val);
                calc_otkosy_price(slider_h_val, slider_vert_val);
                calc_mosk_price(slider_h_val, slider_vert_val);
                calc_laminat_price(slider_h_val, slider_vert_val);
                calc_total_price();
                calc_izd_price();
            }
        });

        $("#slider_v_b_bl_d").slider({
            animate: "fast",
            orientation: "vertical",
            min: +$("#slider_v_b_bl").slider("option", "min"),
            max: +$("#slider_v_b_bl").slider("option", "min") + 150,
            value: +$("#slider_v_b_bl").slider("option", "min"),
            step: 10,
            slide: function(event,ui){
                $("#amount_v_b_bl_d").val(ui.value + " см");
                a1 = ui.value;
                b1 = +$("#slider_h_b_bl_d").slider("value");
                c1 = +$("#slider_v_b_bl").slider("value");
                d1 = +$("#slider_h_b_bl").slider("value");   
                get_sliders_values(a1,b1,c1,d1);
                calc_price_izd_percent();
                calc_montazh_price(slider_h_val, slider_vert_val);
                calc_otkosy_price(slider_h_val, slider_vert_val);
                calc_mosk_price(slider_h_val, slider_vert_val);
                calc_laminat_price(slider_h_val, slider_vert_val);
                calc_total_price();
                calc_izd_price();
            }
        });

        $("#amount_v_b_bl").val($("#slider_v_b_bl").slider("value") + " см");
        $("#amount_h_b_bl").val($("#slider_h_b_bl").slider("value") + " см");
        $("#amount_v_b_bl_d").val($("#slider_v_b_bl").slider("value") + " см");
        $("#amount_h_b_bl_d").val($("#slider_h_b_bl").slider("value") + " см");
        b_bl_active_state = true;
    }

    function hide_b_bl_sliders(){
        $(".sliders_win").css({display: 'flex'});
        $(".sliders_d").css({display: 'none'});
        b_bl_active_state = false;
    }

    function get_sliders_values(a,b,c,d){
        if (b_bl_active_state == false){
            slider_vert_val = a;
            slider_vert_min = +$("#slider-vertical").slider("option", "min");
            slider_h_val = b;
            slider_h_min = +$("#slider").slider("option", "min");
            slider_podokonnik = slider_h_val - slider_h_min;
            slider_otliv = slider_h_val - slider_h_min;
        } else{
            a_min = +$("#slider_v_b_bl_d").slider("option", "min");
            b_min = +$("#slider_h_b_bl_d").slider("option", "min");
            c_min = +$("#slider_v_b_bl").slider("option", "min");
            d_min = +$("#slider_h_b_bl").slider("option", "min");            
            slider_vert_val = ((a * b) + (c * d)) / (b + d);
            slider_vert_min = c_min;
            slider_h_val = b + d;
            slider_h_min = b_min + d_min;
            slider_podokonnik = d - d_min;
            slider_otliv = d - d_min;
        }
    }

    function calc_montazh_price(slider_val, slider_v_val){
        if ($("#montazh").is(":checked")){
            price_montazh = Math.ceil(price_montazh_start + price_montazh_start * (((slider_val - slider_h_min + slider_v_val - slider_vert_min) / 10) * percent_slider));
            $("#montazh2").val(price_montazh);
        } else{
            price_montazh = 0;
            $("#montazh2").val(price_montazh);
        }
    }

    function calc_otkosy_price(slider_val, slider_v_val){
        if ($("#otkosy").is(":checked")){
            price_otkosy = Math.ceil(price_otkosy_start + price_otkosy_start * (((slider_val - slider_h_min + slider_v_val - slider_vert_min) / 10) * percent_slider));
            $("#otkosy2").val(price_otkosy);
        } else{
            price_otkosy = 0;
            $("#otkosy2").val(price_otkosy);
        }
    }

    function calc_mosk_price(slider_val, slider_v_val){
        if ($("#mosk").is(":checked")){
            price_mosk = Math.ceil(price_mosk_start + price_mosk_start * (((slider_val - slider_h_min + slider_v_val - slider_vert_min) / 10) * percent_slider));
            $("#mosk2").val(price_mosk);
        } else{
            price_mosk = 0;
            $("#mosk2").val(price_mosk);
        }
    }

    function calc_podokonnik_price(slider_val, slider_v_val){
        if ($("#podokonnik").is(":checked")){
            price_podokonnik = Math.ceil((price_podokonnik_start * (slider_val/50)));
            $("#podokonnik2").val(price_podokonnik);
        } else{
            price_podokonnik = 0;
            $("#podokonnik2").val(price_podokonnik);
        }
    }

    function calc_otliv_price(slider_val, slider_v_val){
        if ($("#otliv").is(":checked")){
            price_otliv = Math.ceil((price_otliv_start * (slider_val/50)));
            $("#otliv2").val(price_otliv);
        } else{
            price_otliv = 0;
            $("#otliv2").val(price_otliv);
        }
    }

    function calc_laminat_price(slider_val, slider_v_val){
        if ($("#laminat").is(":checked")){
            price_laminat = Math.ceil((price_laminat_start * ((((slider_h_val - slider_h_min + slider_vert_val - slider_vert_min) / 10) * ((price_izd_start + price_izd_profil) * percent_slider)) + price_izd_start + price_izd_stv + price_izd_profil)));
            $("#laminat2").val(price_laminat);
        } else{
            price_laminat = 0;
            $("#laminat2").val(price_laminat);
        }
    }

    function calc_price_izd_percent(){
        price_izd_percent = price_izd_start + price_izd_steklopaket + price_izd_profil;
    }

    function calc_total_price(){
        calc_price_izd_percent();
        $("#total_price").val(Math.ceil(price_izd_start + price_izd_stv + price_montazh + price_otkosy + price_mosk + price_podokonnik + price_otliv + price_laminat + price_izd_furnitura + price_izd_steklopaket + price_izd_profil + (((slider_h_val - slider_h_min + slider_vert_val - slider_vert_min) / 10) * (price_izd_percent * percent_slider))));
    }

    function calc_izd_price(){
        calc_price_izd_percent();
        $("#izd").val(Math.ceil((((slider_h_val - slider_h_min + slider_vert_val - slider_vert_min) / 10) * (price_izd_percent * percent_slider)) + price_izd_start + price_izd_stv + price_izd_profil + price_izd_steklopaket + price_izd_furnitura));
    }

    function get_current_sliders_values(){
        if (b_bl_active_state == true){
            a1 = +$("#slider_v_b_bl_d").slider("value");
            b1 = +$("#slider_h_b_bl_d").slider("value");
            c1 = +$("#slider_v_b_bl").slider("value");
            d1 = +$("#slider_h_b_bl").slider("value");
        } else {
            a1 = +$("#slider-vertical").slider("value");
            b1 = +$("#slider").slider("value");
            c1 = 0;
            d1 = 0;
        }
        get_sliders_values(a1,b1,c1,d1);
    }

    function recalc(){
        get_current_sliders_values();
        set_profil_type($("[name='profil']:checked"), $("[name='profil']:checked").data("profilPrice"));
        set_steklopaket_type($("[name='steklopaket']:checked"), $("[name='steklopaket']:checked").data("steklopaketPrice"));
        calc_price_izd_percent();
        calc_montazh_price(slider_h_val, slider_vert_val);
        calc_otkosy_price(slider_h_val, slider_vert_val);
        calc_mosk_price(slider_h_val, slider_vert_val);
        calc_podokonnik_price(slider_h_val, slider_vert_val);
        calc_otliv_price(slider_h_val, slider_vert_val);
        calc_laminat_price(slider_h_val, slider_vert_val);
        calc_total_price();
        calc_izd_price();
    }

    function redraw(){
        $("#amount2").val($("#slider-vertical").slider("option", "min") + " см");
        $("#slider").css('width', $("#windows_div").css('width'));
        $("#slider-vertical").css('height', $("#windows_div").css('height'));
        $("#win_width").css('width', $("#windows_div").css('width'));
        $("#win_width_text").css('width', $("#windows_div").css('width'));
        $("#amount").val($("#slider").slider("option", "min") + " см");
        $("#slider_v_b_bl_d").css('height', $("#windows_div").css('height'));
    }


    $('#1stv_tab').click(function () {
        $("#1stv_gl").click();
        price_izd_start = 60;
        $("#windows_div").css({background:'url(img/1stv_gl.jpg) center', width:'160px', height:'300px'});
        $("#slider-vertical").slider({min: 70, value: 70, max: 190});
        $("#slider").slider({min: 50, value: 50, max: 140});
        hide_b_bl_sliders();
        redraw();
        recalc();
    });

    $('#2stv_tab').click(function () {
        $("#2stv_gl").click();
        price_izd_start = 120;
        $("#windows_div").css({background:'url(img/2stv_gl.jpg) center', width:'300px', height:'300px'});
        $("#slider-vertical").slider({min: 100, value: 100, max: 190});
        $("#slider").slider({min: 80, value: 80, max: 210});
        hide_b_bl_sliders();
        redraw();
        recalc();
    });

    $('#3stv_tab').click(function () {
        $("#3stv_gl").click();
        price_izd_start = 180;
        $("#windows_div").css({background:'url(img/3stv_gl.jpg) center', width:'441px', height:'300px'});
        $("#slider-vertical").slider({min: 100, value: 100, max: 190});
        $("#slider").slider({min: 160, value: 160, max: 300});
        hide_b_bl_sliders();
        redraw();
        recalc();
    });

    $('#b_bl_tab').click(function () {
        $("#b_bl_gl").click();
        price_izd_start = 240;
        draw_b_bl_sliders();
        $("#b_bl_gl").click();
        $("#windows_div").css({background:'url(img/b_bl_gl.png) center', width:'441px', height:'450px'});
        redraw();
        recalc();
    });

    $(".toggles").controlgroup({
        direction: "vertical"
    });
    $(".toggle").on("change", handleToggle);
    $("[name='brand']").on("change", handleToggle);
    $("[name='furnitura']").on("change", handleToggle);
    $("[name='steklopaket']").on("change", handleToggle);
    $("[name='profil']").on("change", handleToggle);
    $(".brand").controlgroup({
        direction: "vertical"
    });

    $( "#tabs .ui-tabs-panel label" ).removeClass( "ui-corner-top" );
    $( "#tabs .ui-tabs-panel label" ).removeClass( "ui-corner-bottom" );
    $( "#tabs .ui-tabs-panel" ).removeClass( "ui-corner-top" );
    $( "#tabs .ui-tabs-panel" ).removeClass( "ui-corner-bottom" );
});