
/*
My display and calculate function. I used seperate if statments because if one box was invalid
amongst them all, I needed action.
*/

function calcDisplay() {
    //itOne itTwo itThree itFour
    //declare
    let valOne, valTwo, valThree, valFour, firstTot, grTot;

    //retrieve
    valOne = document.forms["commForm"].elements["itOne"].value;
    valTwo = document.forms["commForm"].elements["itTwo"].value;
    valThree = document.forms["commForm"].elements["itThree"].value;
    valFour = document.forms["commForm"].elements["itFour"].value;


    //validate, calculate, display

    if (check(valOne)) { //20.99
        document.forms["commForm"].elements["oneCount"].value = valOne;
        valOne *= 20.99;
        valOne = valOne.toFixed(2);
        document.forms["commForm"].elements["oneTot"].value = valOne;
    } else {
        document.forms["commForm"].elements["oneCount"].value = "Enter number above 0."
    }

    if (check(valTwo)) { //12.75
        document.forms["commForm"].elements["twoCount"].value = valTwo;
        valTwo *= 12.75;
        valTwo = valTwo.toFixed(2);
        document.forms["commForm"].elements["twoTot"].value = valTwo;

    } else {
        document.forms["commForm"].elements["twoCount"].value = "Enter number above 0."
    }

    if (check(valThree)) { //9.95
        document.forms["commForm"].elements["threeCount"].value = valThree;
        valThree *= 9.95;
        valThree = valThree.toFixed(2);
        document.forms["commForm"].elements["threeTot"].value = valThree;

    } else {
        document.forms["commForm"].elements["threeCount"].value = "Enter number above 0."
    }

    if (check(valFour)) { //35.89
        document.forms["commForm"].elements["fourCount"].value = valFour;
        valFour *= 35.89;
        valFour = valFour.toFixed(2);
        document.forms["commForm"].elements["fourTot"].value = valFour;

    } else {
        document.forms["commForm"].elements["fourCount"].value = "Enter number above 0."
    }

    //display first total  **NEED TO RIGHT JUSTIFY
    valOne = parseInt(valOne);
    valTwo = parseInt(valTwo);
    valThree = parseInt(valThree);
    valFour = parseInt(valFour);
    firstTot = valOne + valTwo + valThree + valFour;
    firstTot = firstTot.toFixed(2);
    document.forms["commForm"].elements["tot"].value = firstTot;


    //display grand total  
    //250 + 9% of total sales:  ((total / 100) * 9) + 250
    grTot = 250 + ((firstTot / 100) * 9);
    document.forms["commForm"].elements["grandTotal"].value = grTot;




}


//validation function
function check(x) {
    if (x < 0 || x == "") {
        return false; //I want my if statment to be a smooth check(x) so I made negatives the false result
    } else {
        return true;  //a positive number
    }

}