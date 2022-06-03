let s;
for (row = 1; row < 5; row++) {
    s = 1;
    for (col = 1; col <= 9; col++) {
        if (col >= 6 - row && col <= 4 + row && s) {
            document.write("*")
           
        } else {
            document.write("")
            s = "0";
            document.write(s)
        }
    }
    document.write("<br>");
}