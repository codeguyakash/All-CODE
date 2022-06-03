function fn() {
    if (counter ==15){
        clearInterval(timer);
    }
    else{
        console.log("Hello Bro")
        counter++;
    }
}
let timer = setInterval(fn, 1000);
let counter = 0;