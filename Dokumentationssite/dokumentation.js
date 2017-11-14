$(window).on("load", screen);

function screen() {
    console.log("screen");
    $(".assets").hide();

}

$("#assets").hover("assets");

function assets() {

    console.log("assets");

    $(".assets").show();
}
