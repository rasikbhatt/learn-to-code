var myForm=document.forms.myForm;
var fName=myForm.firstName;
var lName=myForm.lastName;
var email=myForm.email;
var password=myForm.password;
var arrayInput=myForm.getElementsByTagName("input");
var numOfInput=arrayInput.length;
myForm.onsubmit=function(){
    // if(myForm.firstName.value==""){
       
    //     allocate(fName);
    //     return false;
    // }
    // if(myForm.lastName.value==""){
    //     allocate(lName);
    //     return false;
    // }
    // if(myForm.email.value==""){
    //     allocate(email);
    //     return false;
    // }
    // if(myForm.password.value==""){
    //     allocate(password);
    //    return false
    // }       
    // else{
    //     myForm.firstName.style.border="none";
    //     return true;
    // }
    var Flag=true;
    for( i=0;i<numOfInput; i++){
        console.log("in function");
        
        if(arrayInput[i].value==""){
            arrayInput[i].style.border="1px solid red";
            Flag=false;
        }else{
            arrayInput[i].style.border="none";
            Flag=true;
        }
    }
    return Flag;
}
// function allocate(variable) {
//     variable.style.border="1px solid red";
//     // myForm.variable.appendChild(errorImage);
//     return;
// }