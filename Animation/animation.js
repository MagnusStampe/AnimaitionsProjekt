var antalKlik = 0;

//Siden loades

$(window).on("load", titelScreen);

function titelScreen() {

    console.log("titelScreen");

    $("#scene1").hide();
    $("#scene2").hide();
    $("#scene3").hide();

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

    hvorMangeSendesBilledetTil()
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

    $("#scene3").hide();
    $(".ansigt").hide();

    $("#scene4").show();
}
