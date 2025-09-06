function display() {
    /* In this function I parse the integer and check for validity. Then I
    compute the final averaged grade and display it to the user with the
    correct corresponding grade.*/

    let hAvg, midE, fin, part, finAvg;

    hAvg = parseInt(document.forms["gradesForm"].elements["hwAvg"].value);
    midE = parseInt(document.forms["gradesForm"].elements["midEx"].value);
    fin = parseInt(document.forms["gradesForm"].elements["final"].value);
    part = parseInt(document.forms["gradesForm"].elements["partcpn"].value);

    if (check(hAvg) && check(midE) && check(fin) && check(part)) { //calculate if checks good
        finAvg = Math.round((.5 * hAvg) + (.2 * midE) + (.2 * fin) + (.1 * part));
        switch (true) {
            case (finAvg >= 90):
                document.getElementById("result").innerHTML = "You scored: " + finAvg + "&#37; which is a A.";
                break;
            case (finAvg >= 80 && finAvg < 89):
                document.getElementById("result").innerHTML = "You scored: " + finAvg + "&#37; which is a B.";
                break;
            case (finAvg >= 70 && finAvg < 79):
                document.getElementById("result").innerHTML = "You scored: " + finAvg + "&#37; which is a C.";
                break;
            case (finAvg >= 60 && finAvg < 69):
                document.getElementById("result").innerHTML = "You scored: " + finAvg + "&#37; which is a D. You have to retake the course.";
                break;
            case (finAvg >= 0 && finAvg < 59):
                document.getElementById("result").innerHTML = "You scored: " + finAvg + "&#37; which is a F. You have to retake the course.";
                break;
        }
    } else { //display error
        document.getElementById("result").innerHTML =
            "Error: invalid entry. Please enter a numeric entry between 0-100";
    }

}

function check(x) { //checks for valid input
    let result;
    if (
        x === "" ||
        x === null ||
        isNaN(x) || x < 0 || x > 100
    ) {
        result = false; //check is false, is not a number or is out of range
    } else {
        result = true;  //checkIsNaN is true, is a number and is in range
    }

    return result;
}