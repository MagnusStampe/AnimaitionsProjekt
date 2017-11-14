var antalKlik = 0;
var mobilNr = 0;

//Siden loades

$(window).on("load", titelScreen);

function titelScreen() {

    console.log("titelScreen");

    $("#scene1").hide();
    $("#scene2").hide();
    $("#scene3").hide();
    $("#krediteringsbaggrund").fadeOut(1);
    $("#logo").hide();
    $("#payoff2").hide();
    $("#payoff_1").hide();
    $("#scene_JA").hide();
    $("#scene_NEJ").hide();

    $(".ansigt").hide();


    $("#klik_mobil").on("click", prolog);
}

function prolog() {
    $("#titelbillede button").off("click", prolog);

    console.log("prolog");

    $("#titelbillede").hide();
    $("#scene1").show();

    $("#pige_sprite").addClass("pige_ryg_til");

    //Skal erstattes med når lyden er færdig
    $("#pige_sprite").on("animationend", billedeTages);
}

function billedeTages() {
    $("#pige_sprite").off("animationend", billedeTages);

    console.log("billedeTages");

    billedeSendes()
}

function billedeSendes() {
    console.log("billedeSendes");

    $("#scene1").hide();
    $("#scene2").show();

    $("#hand_sprite").addClass("hand_move");

    $("#hand_sprite").on("animationend", billedetErAabnet);
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
    $("#ja").on("click", billedetDeles);

    console.log("billedetDeles");

    $("#sporgsmal").hide();

    setTimeout(billedetErDelt, 5000)

    //Timer lyd

    hvorMangeSendesBilledetTil();
}

function hvorMangeSendesBilledetTil() {
    console.log("hvorMangeSendesBilledetTil");

    $(".ansigt").show();
    $(".ansigt").addClass("puls");

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

        mobilDelay();

    }
}

function mobilDelay() {
    $("#mobil" + mobilNr).addClass("mobil_billede");
    mobilNr++;

    if (mobilNr >= 7) {
        setTimeout(payoff1, 2000);
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

    setTimeout(payoff2, 2000);

}

function payoff2() {
    $("#payoff2").show();
}
