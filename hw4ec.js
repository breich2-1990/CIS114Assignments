function square() {
    let size = parseInt(document.getElementById("number").value);
    let square = "";

    if (size < 2 || size > 10 || size == null || isNaN(size)) {
        document.getElementById("square").innerHTML = "please enter a number between 2-10."
    } else {
        for (let i = 0; i < size; i++) {
            square += "";
            for (let j = 0; j < size; j++) {
                if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                    square += "* ";
                } else {
                    square += "  ";

                }

            }

            square += "<br>";
        }

        document.getElementById("square").innerHTML = square;
    }

}


window.onload = function () {
    document.getElementById("submit").addEventListener("click", square);
}

