var antalKlik = 0;
var mobilNr = 1;

//Siden loades

$(window).on("load", titelScreen);

function titelScreen() {

    console.log("titelScreen");

    $("#scene1").hide();
    $("#scene2").hide();
    $("#scene3").hide();
    $("#krediteringsbaggrund").fadeOut(1);
    $("#logo").hide();
    $("#payoff2").fadeOut(1);
    $("#payoff_1").hide();
    $("#scene_JA").hide();
    $("#scene_NEJ").hide();
    $("#klik_og_del").hide();
    $(".ansigt").hide();


    $("#klik_mobil").on("click", prolog);
}

function prolog() {
    $("#titelbillede button").off("click", prolog);

    console.log("prolog");

    $("#titelbillede").hide();

    $("#baggrundslyd")[0].play();
    $("#baggrundslyd")[0].volume = 0.05;
    $("#scene1").show();

    $("#pige_sprite").addClass("pige_ryg_til");
    setTimeout(blitz, 700);
}

function blitz() {
    $("#blitz")[0].play();
    $("#blitz")[0].volume = 1;

    setTimeout(billedeTages, 1500);
}

function billedeTages() {
    $("#blitz")[0].pause();
    console.log("billedeTages");

    setTimeout(billedeSendes, 1500);

}

function billedeSendes() {
    console.log("billedeSendes");

    $("#scene1").hide();
    $("#scene2").show();
    $("#mobil_lyd")[0].play();
    $("#hand_sprite").addClass("hand_move");

    setTimeout(billedetErAabnet, 7500);
}

function billedetErAabnet() {
    $("#hand_sprite").off("animationend", billedetErAabnet);

    console.log("billedetErAabnet");

    $("#scene2").hide();
    $("#scene3").show();

    $("#ansigt_sprite").addClass("ansigt_move");

    $("#ja").on("click", billedetDeles);
    $("#nej").on("click", billedetDelesIkke);
}

//Højre ben
function billedetDeles() {
    $("#ja").off("click", billedetDeles);

    console.log("billedetDeles");

    $("#sporgsmal").hide();

    $("#timerlyd")[0].play();
    $("#timerlyd")[0].volume = 1;
    $("#timerlyd").on("ended", billedetErDelt);

    hvorMangeSendesBilledetTil();
}

function hvorMangeSendesBilledetTil() {
    console.log("hvorMangeSendesBilledetTil");

    $(".ansigt").show();
    $(".ansigt").addClass("puls");
    $("#klik_og_del").show();

    $(".ansigt").on("click", ansigtKlik);
}

function ansigtKlik() {
    $(this).hide();
    antalKlik++;
    console.log(antalKlik);
}

function billedetErDelt() {
    $(".ansigt").off("click", ansigtKlik);

    console.log("billedetErDelt");

    $(".ansigt").removeClass("puls");

    if (antalKlik == 0) {
        billedetDelesIkke();
    } else {
        $("#scene3").hide();
        $(".ansigt").hide();

        $("#scene_JA").show();

        setTimeout(mobilDelay, 1000);

    }
}

function mobilDelay() {
    $("#mobil" + mobilNr).addClass("mobil_billede");
    mobilNr++;
    $("#mobil_lyd")[0].play();

    if (mobilNr >= 6) {
        setTimeout(payoff1, 6000);
    } else {
        setTimeout(mobilDelay, 1000);
    }
}



//Venstre ben

function billedetDelesIkke() {
    $("#scene3").hide();
    $("#scene_NEJ").show();

    $("#hand_nej_sprite").addClass("hand_nej_move");

    setTimeout(payoff1, 3500);
}


//Payoff1

function payoff1() {
    $("#scene_NEJ").hide();
    $("#scene_JA").hide();

    $("#hand_nej_sprite").removeClass("hand_nej_move");

    $("#payoff_1").show();

    setTimeout(logo, 8000);
}

//Krediteringsbillede m. payoff2

function logo() {
    $("#logo").show();

    setTimeout(krediteringsbillede, 1000);
}

function krediteringsbillede() {
    $("#krediteringsbaggrund").fadeIn(1000);

    setTimeout(payoff2, 2500);

}

function payoff2() {
    $("#payoff2").fadeIn(1000);
}
