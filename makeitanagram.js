function makeAnagram(input) {
    //Enter your code here
    var str1 = input.split("\n")[0].split("");
    var str2 = input.split("\n")[1].split("");
    var res1 = {};
    var res2 = {};

    str1.forEach(i => res1[i] == undefined ? res1[i] =1 : res1[i] +=1)
    str2.forEach(i => res2[i] == undefined ? res2[i] =1 : res2[i] +=1)

    return (compare(res1, res2) + compare(res2, res1));

}

function compare (obj1, obj2){
    var count = 0;
    for (key in obj1) {

        if (obj2[key] !== undefined) {

                obj1[key] !== obj2[key] ? count += (Math.abs(obj1[key] - obj2[key])) : count+=0;
                delete obj1[key];
                delete obj2[key];

            } else {

                count += obj1[key]
                delete obj1[key]

            }

        }

        return count;

} 

var makeAnagramTest = [`cde
abc`];

makeAnagramTest.forEach(function(x){
console.log(makeAnagram(x));
});

/*
Alice recently started learning about cryptography and found that anagrams are very useful. Two strings are anagrams of each other if they have same character set (and frequency of characters) and same length. For example strings "bacdc" and "dcbac" are anagrams, while strings "bacdc" and "dcbad" are not.

Alice decides on an encryption scheme involving 2 large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. She need your help in finding out this number.

Given two strings (they can be of same or different length) help her in finding out the minimum number of character deletions required to make two strings anagrams. Any characters can be deleted from any of the strings.

Input Format 
Two lines each containing a string.

Constraints 
1 <= Length of A,B <= 10000 
A and B will only consist of lowercase latin letter.

Output Format 
A single integer which is the number of character deletions.

Sample Input #00:

cde
abc
Sample Output #00:

4
Explanation #00: 
We need to delete 4 characters to make both strings anagram i.e. 'd' and 'e' from first string and 'b' and 'a' from second string.
*/