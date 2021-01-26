var date=new Date();
var currHour=date.getHours();
document.write("Current date:  "+ date);
date.setHours(currHour-1);
document.write("<br>1 hour ago it was:  "+ date);
