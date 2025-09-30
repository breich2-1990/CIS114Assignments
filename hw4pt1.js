

let forStr1, forProd1 = 1, forStr2, forSum2 = 0, whileStr1, whileProd1 = 1, whileStr2, whileSum2 = 0;

window.onload = function () {

    //every 4th integer from 5 to 25 inclusive, products and sum
    //for loop 1
    forStr1 = "The result of ";
    for (var i = 5; i <= 25; i += 4) {
        if (i < 25) {
            forStr1 += i + " * ";
            forProd1 *= parseInt(i);

        } else {
            forStr1 += i + " "; // no * after 25
            forProd1 *= parseInt(i);
        }
    }
    forProd1 = forProd1.toLocaleString();
    forStr1 += "= " + forProd1;

    document.getElementById("resultOne").innerHTML = forStr1;  //display


    //for loop 2
    forStr2 = "The result of ";
    for (var i = 5; i <= 25; i += 4) {
        if (i < 25) {
            forStr2 += i + " + ";
            forSum2 += parseInt(i);

        } else {
            forStr2 += i + " "; // no * after 25
            forSum2 += parseInt(i);
        }
    }
    forStr2 += "= " + forSum2;

    document.getElementById("resultTwo").innerHTML = forStr2;


    //every third integer from 3 to 18 inclusive, products and sum

    //while loop 1
    whileStr1 = "The result of ";
    let count = 3;
    while (count <= 18) {
        if (count < 18) {
            whileStr1 += count + " * ";
            whileProd1 *= count;
            count += 3;
        } else {
            whileStr1 += count;
            whileProd1 *= count;
            count += 3;
        }
    }

    whileProd1 = whileProd1.toLocaleString();
    whileStr1 += " = " + whileProd1;

    document.getElementById("resultThree").innerHTML = whileStr1;

    //while loop2
    whileStr2 = "The result of ";
    count = 3;
    while (count <= 18) {
        if (count < 18) {
            whileStr2 += count + " + ";
            whileSum2 += count;
            count += 3;
        } else {
            whileStr2 += count;
            whileSum2 += count;
            count += 3;
        }
    }

    whileSum2 = whileSum2.toLocaleString();
    whileStr2 += " = " + whileSum2;

    document.getElementById("resultFour").innerHTML = whileStr2;

}