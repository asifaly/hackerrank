function cutSticks(arr){

    while (arr.length > 0){
        console.log(arr.length);
        var m = arr.sort((a,b)=> a-b)[0];
        arr = arr.filter(function(x,i,a){
            return x - m;
        });
    }
}


var cutSticksTest = [[5,4,4,2,2,8],[1,2,3,4,3,3,2,1],[8,8,14,10,3,5,14,12],[1,13,3,8,14,9,4,4]];
cutSticksTest.forEach(function(x){
  cutSticks(x);
});