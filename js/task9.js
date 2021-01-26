var str="<p>hello<span>pakistan</span></p>";
var openTag;
var closingTag;
var newStr=str;
for(var i=0;i<str.length;i++){
  if(str[i]=="<"){
    openTag = i;
  }
  if(str[i] == ">"){
    closingTag=[i+1];
    var slice = str.slice(openTag, closingTag);
    newStr=newStr.replace(slice,"");
  }
}
console.log("string with tags: "+str);
console.log("output: "+newStr);