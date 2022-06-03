function validation() {
    var username = document.getElementById('user').value;

    var password = document.getElementById('pass').value;

    var cpassword = document.getElementById('cpass').value;

    var mobileNo = document.getElementById('mobilenumber').value;

    var emailid = document.getElementById('email').value;

// -username----------------------------------------------------------------------------------------------
    if(username ==""){
        document.getElementById('users').innerHTML ="** Please Fill the User Name Field **";
        return false;
    }
    if((username.length <=2) || (username.length > 20)){ 
        document.getElementById('users').innerHTML ="** User Name Length must be between 2 and 20 Characters **";
        return false;
    } 
    if (!isNaN(username)){ 
        document.getElementById('users').innerHTML ="** Only characters are allowed **";
        return false;
    } 

// -password-----------------------------------------------------------------------------------------------
    if(password ==""){
        document.getElementById('passs').innerHTML ="Please Fill the password field";
        return false;
    }
    if((password.length <=5) || (password.length > 20)){ 
        document.getElementById('passs').innerHTML ="** password Length must be between 5 and 20 Characters **";
        return false;
    } 

// -confirmed password--------------------------------------------------------------------------------------
    if(cpassword ==""){
        document.getElementById('cpasss').innerHTML ="Please Fill the confirmed password field";
        return false;
    }
    if(cpassword!=password){ 
        document.getElementById('cpasss').innerHTML ="** Confirmed Password in not Match **";
        return false;
    } 

// -Mobile No-----------------------------------------------------------------------------------------------
    if(mobileNo ==""){
        document.getElementById('mobilenumbers').innerHTML ="Please Fill the Mobile no field";
        return false;
    }
    if(isNaN(mobileNo)){
        document.getElementById('mobilenumbers').innerHTML ="only number are allowed";
        return false;
    }
    if((mobileNo.length!=10)){ 
        document.getElementById('mobilenumbers').innerHTML ="** number cannot be less the 10 Number **";
        return false;
    } 


// -Email--------------------------------------------------------------------------------------------------
    if(emailid ==""){
        document.getElementById('emails').innerHTML ="** Please Fill the Email id field **";
        return false;
    }
    if(emailid.indexOf('@') <=0 ){
        document.getElementById('emails').innerHTML ="** @ Invalid Position **";
        return false;
    }
    if((emailid.charAt(emailid.length-4)!='.') && (emailid.charAt(emailid.length-3)!='.')){
        document.getElementById('emails').innerHTML ="** . Invalid Position **";
        return false;
    }


}