

window.onload = function () {

    document.getElementById("submit").addEventListener("click", display);

    document.getElementById('reset').addEventListener('click', function () {
        location.reload();
    });

    document.getElementById("input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action (form submission or page reload)
        }
    });
}

function display() {

    //my 2dim array
    var stateArr = [
        ["AL", "Alabama", "Montgomery", 5157699],
        ["AK", "Alaska", "Juneau", 740133],
        ["AZ", "Arizona", "Phoenix", 7582384],
        ["AR", "Arkansas", "Little Rock", 3088354],
        ["CA", "California", "Sacramento", 39431263],
        ["CO", "Colorado", "Denver", 5957493]
    ];

    var stringResult = "", boolFound = false;



    var input = document.getElementById("input").value;

    for (i = 0; i < stateArr.length; i++) {
        for (j = 0; j < stateArr.length; i++) {
            if (input.toLowerCase() == stateArr[i][0].toLowerCase() || input.toLowerCase() == stateArr[i][1].toLowerCase()) {
                stringResult = "State Abbreviation: " + stateArr[i][0] + "\n";
                stringResult += "State Full Name: " + stateArr[i][1] + "\n";
                stringResult += "State Capital: " + stateArr[i][2] + "\n";
                stringResult += "State Population: " + stateArr[i][3].toLocaleString() + "\n";
                document.getElementById("result").value = stringResult;
                boolFound = true;
            } else if (input == "") {
                document.getElementById("result").value = "Please enter a state.";
            } else if (boolFound == false) {
                document.getElementById("result").value = "Sorry, we do not have information about this state! We only have information about Alabama, Alaska, Arizona, Arkansas, California, or Colorado.";
            }
        }
    }


}