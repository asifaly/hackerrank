function chocFest(arr){

  var n = arr[0];
  var c = arr[1];
  var m = arr[2];
  
  console.log(n/c + wrappers(n/c));


  function wrappers (w){
    console.log(w%m);
    while (w%m > m){
      return w/m + wrappers(w%m);
    }

  }

}




var chocFestTest = [[10,2,5],[6,2,2],[12,4,4]];

chocFestTest.forEach(function(x){
  chocFest(x);
});