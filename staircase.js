function staircase(n) {
    //var n = parseInt(readLine());
  for (i = 0; i < n; i++) {
      console.log(println());
    }
    
 function println(){
  var str = "";
  for (j = 1; j <= n; j++) {
      n - j > i ? str += " " : str += "#";
    }
   return str;
}
}

staircaseTest = [3,4,5,6,7];

staircaseTest.forEach(function(x){
  staircase(x);
});


/*
Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?

Input 
You are given an integer NN depicting the height of the staircase.

Output 
Print a staircase of height NN that consists of # symbols and spaces. For example for N=6N=6, here's a staircase of that height:

     #
    ##
   ###
  ####
 #####
######
Note: The last line has 0 spaces before it.
*/