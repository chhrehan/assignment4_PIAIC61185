var num=prompt("Enter number");
var sum=0;
var index;
var len=num.length;
for(var i=0; i<len; i++){
  sum=sum+Number(num[i]);
}
var mean=sum/len;
document.write("Input:  " + num);
document.write("<br>out put: " + parseInt(mean));