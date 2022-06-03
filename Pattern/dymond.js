
for (i=1;i<=6;i++){
    let k;
    if (i%2==0){
        k=2*i
    }else{
        k=i
    }

    for(j=1;j<=k;j++){
        document.write("*")
    }
    document.write("<br>")
}