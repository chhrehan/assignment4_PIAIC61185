var date=new Date();
var dateInMili=date.getTime();
var minute=dateInMili/(1000*60)
document.write("Current Date: "+date);
document.write("<br>Elapsed Miliseconds since January 1,1997: "+ dateInMili);
document.write("<br>Elapsed Minutes since January 1,1997: "+ minute )
