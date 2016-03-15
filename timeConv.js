function timeConv(time) {

    var hh = Number(time.substr(0,2));
    var mmss = time.slice(2,time.length-2);
    var ap = time.substr(time.length-2,2);

    if (ap == "PM"){
      hh==12 ? printTime(hh) : printTime(hh+12); 
    } else {
      hh==12 ? printTime(hh-12): printTime(hh);   
    }

    function printTime(hh){
      hh>10 ? console.log(hh+mmss) : console.log("0"+hh+mmss);
    }
}

var timeTest = ["06:40:03AM","12:05:05PM","12:05:05AM","11:05:05AM","06:59:59PM","07:30:35PM"];

timeTest.forEach(function(x){
  console.log(timeConv(x));
});

/*
Given a time in AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock and 12:00:00 on a 24-hour clock.

Input Format

A time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01≤hh≤1201≤hh≤12.

Output Format

Convert and print the given time in 24-hour format, where 00≤hh≤2300≤hh≤23.

Sample Input

07:05:45PM
Sample Output

19:05:45
Explanation

7 PM is after noon, so you need to add 12 hours to it during conversion. 12 + 7 = 19. Minutes and seconds do not change in 12-24 hour time conversions, so the answer is 19:05:45.
*/