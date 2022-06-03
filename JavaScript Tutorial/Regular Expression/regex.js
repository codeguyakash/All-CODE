let reg = /suraj/; //this is the regular expression litaeal in js 
reg = /suraj/g; //g means global
// let reg = /suraj/i; //i means case insensitive 
 console.log(reg);
 console.log(reg.source);

 let Str = "suraj is a good boy and suraj also graphic designer";
 
//1. exec() - this function will return an array for match or null for not match
 let result = reg.exec(Str); 
 console.log(result);
 console.log(result.index);
 console.log(result.input);


 //2. text() - return true o false
 let result2 = reg.test(Str);
 console.log(result2);

 //3.match() - this will return and array or results or null
 let result3 = Str.match(reg);
 console.log(result3);

 //4.search() - return index of first match else -1
 let result4 = Str.search(reg);
 console.log(result4);

 //5.replace() - return new replaced string with all the replacement (if no flag is given, first match will be replaced)
 let result5 = Str.replace(reg, 'Ritik');
 console.log(result5);





let regex = /akash/;
regex = /^akash/; //string start with
regex = /akash$/; //string ends with
regex = /a.ash/; //any one character
regex = /a*ash/; //any 0 or more charcters
regex = /akr?ashs?/; //after character means this is optional 

let str = "akash is a good boy and akash is code guy akash"


regex = /a[a-z]ash/; // can be any character from a to z 
regex = /a[ast]ash/; // can be a, s or t
regex = /a[^mno]ash/; // cannot be any of m, n, or o
regex = /a[^mno]as[huk]/; // cannnot be any m, n, or o + can be h, u,or k
regex = /a[a-zA-Z]a[es0-9]/; // we can have as many charcter sets as we want


// quantifiers - we use { }
regex = /aka{2}sh/; // a can occur exactly 2 times
regex = /aka{0,3}sh/; // a can occur exactly 0 to 3 ( 0 or 1 or 2 or 3) times


// grouping we use ( )
regex = /(aka){2}/; // 



str = "akash";

let result = regex.exec(str);
console.log("the result from exec is ",result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`the string ${str} does not matches the expression ${regex.source}`);

}



let number = 5;

if(number/2){
    console.log("Number is EVEN");
}
else{
    console.log("Number is ODD");
}






