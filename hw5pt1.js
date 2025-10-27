var nameRes = null, radRes = null, selRes = null, string = "";


window.onload = function () {





    document.getElementById("submit").addEventListener("click", display);

    document.getElementById('reset').addEventListener('click', function () {
        location.reload();
    });

    document.getElementById("name").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action (form submission or page reload)
        }
    });

}

function display() {


    var check;
    var checkRes = [];
    var count = 0;

    //retrieve
    nameRes = document.getElementById("name").value;
    radRes = personalInfo.elements["age"].value;
    selRes = personalInfo.movieChoice.options[personalInfo.movieChoice.selectedIndex].value;
    check = document.querySelectorAll('input[name="browser"]:checked');

    check.forEach(checkbox => {
        checkRes.push(checkbox.value);  //i included this because it makes sense for this code, even though you didn't require to display
        count++;
    });

    if (document.querySelector('input[name="age"]:checked') == null) { //age
        document.getElementById("result").value = "Please choose an age.";
    } else if (nameRes == "") {  // name
        document.getElementById("result").value = "Please enter a name.";
    } else if (count == 0) {  //browser
        document.getElementById("result").value = "Please choose a browser.";
    } else if (selRes == "none") {  //movie
        document.getElementById("result").value = "Please choose a movie type.";
    } else {

        string = "Name: " + nameRes + "\n";
        string += "Age: " + radRes + "\n";
        string += "Movie: " + selRes + "\n";
        string += "Browser: " + checkRes + "\n";
        string += "\nThanks, your data was submitted!"
        document.getElementById("result").value = string;

    }



}



