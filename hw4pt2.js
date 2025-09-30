window.onload = function () {
    let tableBuild = "";
    for (let i = 5; i <= 9; i++) {//outside

        tableBuild += "<table><th>Number</th><th>Multiplier</th><th>Result</th>";

        for (let j = 1; j <= 9; j++) {//inside runs all the way through once before outside runs the next iterations
            tableBuild += "<tr><td>" + j + "</td><td>" + i + "</td><td>" + i * j + "</td></tr>";

        }

        tableBuild += "</table>";

    }

    document.getElementById("table").innerHTML = tableBuild;


}