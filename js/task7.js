var str="The quick brown fox jumps over the lazy dog";
var ct=str.match(/the/gi).length;
document.write("Text:  "+ str);
document.write("<br>There are "+ct+" accurrence(s) of word 'the'.");