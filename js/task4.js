var email=prompt("Enter email");
var valid=false;
var specialCharAtIndex=email.indexOf("@");
var specialCharDot=false;
if(email.search("@")!= -1){
  for(var i=0;i<email.length; i++){
    if(email.charCodeAt(i) == 46){
      specialCharDotIndex=i;
      specialCharDot=true;
      break;
    }
  }
  if(specialCharDot == true && specialCharDotIndex>++specialCharAtIndex){
    valid=true;
  }
}
if(valid==true){
  alert("Email is correct");
}
else{
  alert("Email is incorrect");
}

