const name = "Iyke";

// manipulating style
// $("body").css("background-color", "green");

// adding classes in jquery

$("body").addClass("green-bg");

// manipulating text in jquery
$("h1").text(`hello ${name}`);
$("button").text("click me");

// manipulating attributes in jquery

$("a").attr({
"href": "https://www.bing.com",
"target": "blank"
})
    .css({
        "color": "white",
        "font-size": "2rem",
        "margin-right": "10px",
        "text-decoration": "none"
    });

    // event listeners

$("h2").on("mouseover", function () {
    $("h2").css("color", "green");
});
$("h2").on("mouseout", function () {
    $("h2").css("color", "white");
});

// animations in jquery

$("button").on("click", function () {
    $("h1").fadeToggle()
});