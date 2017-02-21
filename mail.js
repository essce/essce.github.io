function showContact() {
    wipe();
    document.getElementById('gform').style.display = "block";
    document.getElementById('about').style.display = "none";
}
function hideContact() {
    document.getElementById('about').style.display = "block";
    document.getElementById('gform').style.display = "none";
}

function showResume() {
    document.getElementById('resume').style.display = "block";
    document.getElementById('about').style.display = "none";
}
function hideResume() {
    document.getElementById('about').style.display = "block";
    document.getElementById('resume').style.display = "none";
}
function hideAll() {
    //hideContact();
    hideResume();
}
$(document).ready(function() {
    wipe();
    var back = document.getElementById("backb");
    back.addEventListener("click", wipe);

});

function wipe() {
    $('#gform').find('input:text').val('');
    $('#gform').find('textarea').val('');
    $("#submitted").empty();
}

function submitted() {
    $("#submitted").text("Your email has been sent. Thanks!");
}