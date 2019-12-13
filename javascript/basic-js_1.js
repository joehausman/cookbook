function doTheExternal() {
    document.getElementById("external").innerHTML = "the external hath been done";
}

function alertWindow() {
    window.alert("oof these are annoying\nsorry :/");
}

function logConsole() {
    console.log("this is a console log");
}

function variableTest() {
    // the only purpose of this is to demonstrate some of the ways
    // JavaScript is different from Java, or other little details
    // that could easily be forgotten

    // automatic datatypes wow
    var x = 12;
    var y = 11;
    var z = x + y;
    var stuff = "brotato";

    // if you get sick of typing "var"
    var a = 100, b = 50, thing = "dood";

    // redeclaring a variable will not cause it to lose its value
    // not sure why you would do this, though
    var shoe = "red";
    var shoe;

    // string concatination is 2 EZ
    var concat = stuff + " " + thing;
    concat += ", my guy";
    concat += " " + x;

    var newbro = "dfjkfdlfdjkdf";
    var newType = typeof newbro;

    // booleans are lowercase
    var boolbool = true;

    var allTheStuff = z + " " + stuff +"<br>";
    allTheStuff += a + " " + b + " " + thing + "<br>";
    allTheStuff += shoe + "<br>";
    allTheStuff += concat + "<br>";
    allTheStuff += newType + "<br>";
    allTheStuff += boolbool + "<br>";
    return allTheStuff;
    // document.getElementById("variablePlace").innerHTML = allTheStuff;
}
