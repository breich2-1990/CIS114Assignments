

window.onload = function () {

    //The instructions listed to keep the output out of the form
    //so I used this to clear things
    document.getElementById('reset').addEventListener('click', function () {
        location.reload();
    });


}

function calc() {

    var inputNum = parseFloat(document.mathForm.input.value);
    var re = new RegExp("^[0-9]{1,11}\.[0-9]{4,}$");
    var intNum, sqrNum, tenthsNum, hunNum, thouNum, strResult = "";

    if (!re.test(inputNum)) {
        document.getElementById("err").innerHTML = "Invalid! Please enter a decimal with atleast 4 digits after the decimal.";
    } else {
        document.getElementById("err").innerHTML = "";

        intNum = Math.round(inputNum);

        sqrNum = Math.round(Math.sqrt(inputNum));

        tenthsNum = Math.round(inputNum * 10) / 10; //.0

        hunNum = Math.round(inputNum * 100) / 100; //.00

        thouNum = Math.round(inputNum * 1000) / 1000; //.000

        strResult += "The initial number was: " + inputNum + "\n";
        strResult += "The rounded integer is: " + intNum + "\n";
        strResult += "The rounded square root is: " + sqrNum + "\n";
        strResult += "The tenths place result is: " + tenthsNum.toFixed(1) + "\n";
        strResult += "The hundredths place result is: " + hunNum.toFixed(2) + "\n";
        strResult += "The thousandths place result is: " + thouNum.toFixed(3);


        document.getElementById("result").value = strResult;


    }


}

