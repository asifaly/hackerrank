function gridChallenge(input) {

    input = input.split("\n");
    var result = [];
    for (i=2;i<input.length;i++){
        result.push(input[i].split("").sort(function(a,b){return a > b}).join(""));
    }
    console.log(result);
} 

var gridTest = [`1
5
ebacd
fghij
olmkn
trpqs
xywuv`];

gridTest.forEach(function(x){
  gridChallenge(x);
});

