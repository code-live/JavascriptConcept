/* 
Write a JavaScript program to calculate the factorial of a number. 
In mathematics, the factorial of a non-negative integer n, denoted by n!,
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
*/

// Method -1

function storyWriter(num) {
	if(num =< 0){
		return 0;
	}
	if(num === 1){
		return 1;
	}
	return num * storyWriter(num-1);
}

var x = storyWriter(5);
console.log(x);


//Method - 2

function storyWriter(num , res) {
	res = res || 1;
	if(num < 0){
		return 0;
	}
	if(num === 0){
		return res;
	}
	res = res * num;
	return storyWriter(num-1 , res);
}

var temp;
var x = storyWriter(5, temp);
console.log(x);

/*
Write a JavaScript program to find the greatest common divisor (gcd) 
of two positive numbers.
*/


function gcd(a, b) {
  // uses Euclid's algorithm (https://en.wikipedia.org/wiki/Greatest_common_divisor)
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

//A recursive version countDown

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};
countdown(10);