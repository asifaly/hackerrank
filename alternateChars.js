function alterChars(input) {
    //Enter your code here
    input = input.split("\n");
    for(i=1;i<input.length;i++){
        console.log(input[i].length - input[i].split("").filter(function(e,j,a){
            return e !== a[j-1];
        }).length);
    }
} 

var alterCharsTest = [`5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB`];

alterCharsTest.forEach(function(x){
  alterChars(x);
});


/*
Shashank likes strings in which consecutive characters are different. For example, he likes ABABA, while he doesn't like ABAA. Given a string containing characters AA and BB only, he wants to change it into a string he likes. To do this, he is allowed to delete the characters in the string.

Your task is to find the minimum number of required deletions.

Input Format

The first line contains an integer TT, i.e. the number of test cases. 
The next TT lines contain a string each.

Output Format

For each test case, print the minimum number of deletions required.
*/