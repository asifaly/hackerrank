function palindromeIndex (str){

  var result = {};
  for (i=0;i<str.length;i++){
    result[str[i]] = (result[str[i]] === undefined ? result[str[i]] = 1 : result[str[i]] +=1);
  }
  console.log(result);
  return countOdd(result);
}

palindromeIndexTest = ["madams\nmadam","dmalayalam\nmalayalam"];

palindromeIndexTest.forEach(function(x){
  console.log(newApproach(x));
});

function countOdd (obj){
  odd = 0;
  for (key in obj){
    obj[key]%2 !== 0 ? odd+= obj[key] : "";
  }
  return odd;
}


function processData(input) {
    //Enter your code here
    //var lines = input;
    var lines = input.split("\n");

    for (i=1;i<lines.length;i++){

    if (lines[i] == lines[i].split("").reverse().join("")){
    console.log (-1);
    } else {

    //var arr = lines[i].split("");    
    for(j=0;j<lines[i].length;j++){
    if (lines[i].slice(j,lines[i].length) == lines[i].slice(j,lines[i].length).split("").reverse().join("")){
    console.log(j);
    break;
    } 
    //var newarr = arr.filter((v,ind) => j !== ind ? v : "")
    //if (newarr.join("") == newarr.reverse().join("")){
    } 
}

}
}

function newApproach (input){

  var lines = input.split("\n");

    for (i=1;i<lines.length;i++){

      var midPoint = lines[i].length/2;
      var firstHalf = lines[i].substr(0,midPoint);
      var secondHalf = lines[i].substr(midPoint);
      var result = -1;
      var j = 1;

      while (j>0){

        first = firstHalf.substr(0,j-1)+firstHalf.slice(j);
        second = secondHalf.substr(0,j-1)+secondHalf.slice(j);

        if ( first === second.split("").reverse().join("")){
          result = j-1;
          break;
        }
        j++;
      }
      console.log(result);
    }   
}