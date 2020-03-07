var myForm=document.forms.myForm;
var arrayInput=myForm.getElementsByTagName("input");
var numOfInput=arrayInput.length;
myForm.onsubmit=function(){ 
    var Flag=true;
    for( i=0;i<numOfInput; i++){
        console.log("in function");
        if(arrayInput[i].value==""){
            arrayInput[i].style.border="1px solid red";
            Flag=false;
        }else{
            arrayInput[i].style.border="1px solid hsl(246, 25%, 77%)";
            Flag=true;
        }
    }
    if(Flag==false){
        document.getElementById("allow").style.display="flex";
    }
    return Flag;
}