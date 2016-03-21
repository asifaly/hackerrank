function insertionSort(input) {
    //Enter your code here
    //input = input.split("\n");
    //n = input[0];
    ar = input.split(" ");
    last = ar[ar.length-1];
    
    for(i=ar.length-2; i>=0; i--){
        
        if (ar[i] < last){
            ar[i+1] = last;
            console.log(ar.join(" "));
            break;
        } else {
            ar[i+1] = ar[i];
        }
        console.log(ar.join(" "));
    }

} 

var insertionSortTest = ["1 3 5 9 13 22 27 35 46 51 55 83 87 23","2 4 6 8 3","2 3 4 5 6 7 8 9 10 1"];

insertionSortTest.forEach(function(x){
    insertionSort(x);
});