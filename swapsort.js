var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var testArray = [7, 9, 4, 5];
swap(testArray, 0, 1);

console.log(testArray);


function swapDynamic (arr){

  for (i=0;i<arr.length;i++){
    var temp = arr[0];
    arr[i] = arr.indexOf
    arr[i+1]= temp;
  }
}

var swapDynamicTest = [7,9,4,5,3,2,10,1];

swapDynamic(swapDynamicTest);

console.log(swapDynamicTest);
