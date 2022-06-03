
for (row = 1; row <= 5; row++) {
    for (col = 1; col <= 5; col++) {
        if (col >= row) {

            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}

