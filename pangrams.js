function pangrams(input) {
    var line = input.toLowerCase();
    var abc = [];
    var pangram = false;
    for (i=0;i<line.length;i++){
        abc.indexOf(line[i]) < 0 && line[i] !== " " ? abc.push(line[i]) : ""; 
    }
    
    return abc.length === 26 ? "pangram" : "not pangram";
} 

var pangramsTest = ['We promptly judged antique ivory buckles for the next prize','We promptly judged antique ivory buckles for the prize']

pangramsTest.forEach(function(x){
  console.log(pangrams(x));
});

/*
Roy wanted to increase his typing speed for programming contests. So, his friend advised him to type the sentence "The quick brown fox jumps over the lazy dog" repeatedly, because it is a pangram. (Pangrams are sentences constructed by using every letter of the alphabet at least once.)

After typing the sentence several times, Roy became bored with it. So he started to look for other pangrams.

Given a sentence ss, tell Roy if it is a pangram or not.

Input Format

Input consists of a string ss.

Constraints 
Length of ss can be at most 103103 (1≤|s|≤103)(1≤|s|≤103) and it may contain spaces, lower case and upper case letters. Lower-case and upper-case instances of a letter are considered the same.

Output Format

Output a line containing pangram if ss is a pangram, otherwise output not pangram.

Sample Input

Input #1

We promptly judged antique ivory buckles for the next prize    
Input #2

We promptly judged antique ivory buckles for the prize    
Sample Output

Output #1

pangram
Output #2

not pangram
Explanation

In the first test case, the answer is pangram because the sentence contains all the letters of the English alphabet.
*/