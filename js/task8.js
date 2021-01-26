var th = ['hundrad','thousand','million', 'billion','trillion'];
var dg = ['','one','two','three','four', 'five','six','seven','eight','nine'];
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
var input=prompt("Enter Number");
var len=input.length;
var num=Number(input);

if(len==1){
  console.log(dg[num]);
}
else if(len==2 && input[0]<2){
  console.log(tn[Number(input[1])]);
}
else if(len>=2){
  if(len==2){
    console.log(tw[Number(input[0])]+ " "+ dg[Number(input[1])]);
  }

  if(len==3){
    console.log(dg[Number(input[0])]+ " "+th[0]+" and "+tw[Number(input[1])]+ " "+ dg[Number(input[2])]);
  }
  
}
