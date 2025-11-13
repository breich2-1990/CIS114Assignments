

window.onload = function () {





}

function switchColor(choice) {

    var divChange = document.getElementById("toBeChanged");
    if (choice == 0) {

        divChange.className = "purple";

    } else if (choice == 1) {

        divChange.className = "green";

    } else if (choice == 2) {
        divChange.className = "yellow";
    }

}

function switchBold(checkbox) {
    var divChange = document.getElementById("toBeChanged");
    if (checkbox.checked) {
        divChange.style.fontWeight = "bold";
    } else if (!checkbox.checked) {
        divChange.style.fontWeight = "normal";
    }

}

function switchUnder(checkbox) {

    var divChange = document.getElementById("toBeChanged");
    if (checkbox.checked) {
        divChange.style.textDecoration = "underline";
    } else if (!checkbox.checked) {
        divChange.style.textDecoration = "none";
    }


}

function switchIt(checkbox) {

    var divChange = document.getElementById("toBeChanged");
    if (checkbox.checked) {
        divChange.style.fontStyle = "italic";
    } else if (!checkbox.checked) {
        divChange.style.fontStyle = "normal";
    }

}

function switchSize(selectOption) {

    var selected = selectOption.value;
    var divChange = document.getElementById("toBeChanged");

    if (selected == "oneEm") {
        divChange.style.fontSize = '1em';
    } else if (selected == "onePointFiveEm") {
        divChange.style.fontSize = '1.5em';
    } else if (selected == "twoEm") {
        divChange.style.fontSize = '2em';
    }

}


