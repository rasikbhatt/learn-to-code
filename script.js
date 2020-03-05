var myForm=document.forms.myForm;
var input=document.getElementsByTagName("input");
myForm.onsubmit=function(){
    if(myForm.firstName.value==""){
        myForm.firstName.style.border="2px solid red";
        return false;
    }
    else if(myForm.lastName.value==""){
        myForm.lastName.style.border="2px solid red";
        return false;
    }
    else if(myForm.email.value==""){
        myForm.email.style.border="2px solid red";
        return false;
    }
    else if(myForm.password.value==""){
        myForm.password.style.border="2px solid red";
       return false
    }       
    else{
        myForm.firstName.style.border="none";
        return true;
    }
}