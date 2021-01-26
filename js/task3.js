var password = prompt("Enter password");
var correct = true;
if(password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90 || password.charCodeAt(0)>=97 && password.charCodeAt(0)<=122){
  for(var i=0;i<password.length; i++){
    if(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90 || password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122 || password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57){
      continue;
    }
    else {
      correct = false;
      break;
    }
  }
}
else{
  correct = false;
}
if(correct==true){
  alert("Congratulations! your password is correct");
}
else{
  clert("You entered incorrect password");
}
