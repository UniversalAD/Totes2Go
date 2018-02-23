$('.submit').click(function () {
    console.log("click");
    if ($('#PhoneCheck').is(":checked") || $('#EmailCheck').is(":checked")) {
        return true;
    }

    else {
        document.getElementById("error-message").innerHTML = "Please make a selection";
        return false;
    }

});