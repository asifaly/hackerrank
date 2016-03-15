//partially working solution some test cases are failing

function lexico(input) {
      input = input.split("\n");

  for(i=1;i<input.length;i+=2){

    var result = "";
    var first = input[i];
    var second = input[i+1];

    while (first.length > 0 && second.length > 0){

          if (first < second) {
          
              result += first.substr(0,1);
              first = first.slice(1,first.length);

          } else {
           
              result += second.substr(0,1);
              second = second.slice(1, second.length);
          }

    } 

    if (first.length === 0) {
      result += second;
    }

    if (second.length === 0){
      result += first;
    }

    console.log(result);

    }
} 

//WIP Solution to cover all test cases
function lexico1(input){

  input = input.split("\n");

  for(i=1;i<input.length;i+=2){

    var result = "";
    var first = input[i];
    var second = input[i+1];

    while (first.length > 0 && second.length > 0){

          if (first < second) {
          
              result += first.substr(0,1);
              first = first.slice(1,first.length);

          } else if (first > second){
           
              result += second.substr(0,1);
              second = second.slice(1, second.length);

           } else {

              endChar = equalCheck(first);
              result += first.substr(0,endChar) + second.substr(0,endChar);
              if (first.length > 1 || second.length >1){
                second = second.slice(0, endChar);
                first = first.slice(0, endChar);
              } else {
                second = "";
                first = "";
              }
          }

    } 

    if (first.length === 0) {
      result += second;
    }

    if (second.length === 0){
      result += first;
    }

    console.log(result);

    }

}

function equalCheck (str) {
  var res;
  for (i=0; i<str.length;i++){
    if (str[i] <= str[i+1]){
      res = i+1;
      break;
    }
  }
  return res;
}

var endCharTest = ["ABACABA", "DAD","D"];
endCharTest.forEach(function(x){
  console.log(x.substr(0,equalCheck(x)));
});


var lexicoTest = ["1\nAECCCBAF\nBECCCBAD","1\nZZYYZZZA\nZZYYZZZB","2\nJACK\nDANIEL\nABACABA\nABACABA", "5\nDAD\nDAD\nABCBA\nBCBA\nBAC\nBAB\nDAD\nDABC\nYZYYZYZYY\nZYYZYZYY"];
lexicoTest.forEach(function(x){
  lexico1(x);
});
