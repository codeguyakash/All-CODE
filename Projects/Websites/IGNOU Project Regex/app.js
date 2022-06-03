function Login() {
    var enrollment = document.getElementById('Enroll').value;
    var password = document.getElementById('Pass').value;

// -Enrollment-----------------------------------------------------------------------------------------------

// if (enrollment ==""){ 
//     document.getElementById('Enroll.Span').innerHTML ="**Please Fill the Field**";
//     return false;
// } 

// // -Password-----------------------------------------------------------------------------------------------
// if(password ==""){
//     document.getElementById('Pass.Span').innerHTML ="**Please Fill the password field**";
//     return false;
// }
// }

var EnrollCheck = /^[0-9]{10}$/;

if(EnrollCheck.test(enrollment)){
    document.getElementById('Enroll.Span').innerHTML = " ";
}else{
    document.getElementById('Enroll.Span').innerHTML = " ** Invalid Enrollment Number";
    return false;
}


var PassCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

if(PassCheck.test(password)){
    document.getElementById('Pass.Span').innerHTML = " ";
}else{
    document.getElementById('Pass.Span').innerHTML = " ** Please Enter Correct Password";
    return false;
}
}