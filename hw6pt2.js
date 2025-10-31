

window.onload = function () {


    document.getElementById('reset').addEventListener('click', function () {
        location.reload();
    });


}

function calc() {

    var inputString = document.stringForm.long.value.toLowerCase();
    var inputChar = document.stringForm.charText.value.toLowerCase();
    var count = 0;
    var strOutFound = "";
    var strOutNotFound = "";


    for (let x of inputString) {
        if (inputChar == x) {
            count++;
        }
    }

    if (count > 0) {

        strOutFound += "Found! The character " + inputChar;
        strOutFound += " was found " + count + " times."

        document.getElementById("result").innerHTML = strOutFound;

    } else {

        document.getElementById("result").innerHTML = "";

        strOutNotFound += "<html>\n";
        strOutNotFound += "<head>\n";
        strOutNotFound += "<title>Not Found</title>\n";
        strOutNotFound += "</head>\n";
        strOutNotFound += "<body>";
        strOutNotFound += "<div style='margin:0 auto;'>\n";
        strOutNotFound += "<p>Search character ";
        strOutNotFound += "<strong>" + inputChar + "</strong>";
        strOutNotFound += " not found in the content you typed";
        strOutNotFound += "</p>\n";
        strOutNotFound += "</div>\n";
        strOutNotFound += "</body>\n";
        strOutNotFound += "<input type='button' value='Close Window' onclick='window.close()'>\n";
        strOutNotFound += "</html>\n";

        // open window on the upperleft of the screen

        var newWindow = window.open("", "new_window", "top=1,left=1,width=300,height=100");
        newWindow.focus();
        newWindow.document.write(strOutNotFound);

    }




}


