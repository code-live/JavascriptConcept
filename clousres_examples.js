//A closure is a special kind of object that combines two things:
// a function, and the environment in which that function was created.
//The environment consists of any local variables that were in-scope at the
// time that the closure was created. In this case, myFunc is a closure that
// incorporates both the displayName function and the "Mozilla" string that
// existed when the closure was created.

function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber(a) { 
    console.log(a + num);
  }
  num++;
  //checkNumber();
  return checkNumber;
}

var number = numberGenerator(); 					
/*
	in return number will grt this function body 		function checkNumber(a) { 
														  console.log(a + num);
														}
*/
number(1); // 3  

--------------------------------------------------------------------------------------------------

function sayHello() {
	hello = 'Hello, world!';
  var say = function() {
   console.log(hello);
  }
  // Local variable that ends up within the closure 
  var hello;
  return say;
}
var sayHelloClosure = sayHello(); 

/*
	in return number will grt this function body 		function checkNumber(a) { 
														  console.log(a + num);
														}
*/
sayHelloClosure();

--------------------------------------------------------------------------------------------------

// Write a function, nonsense that takes an input string. This function contains
// another function, blab which alerts string and is immediately called inside
// the function nonsense. blab should look like this inside of the nonsense
// function:

// var blab = function(){
//   alert(string);
//  };

function nonsense(string) {
  var blab = function() {
    alert(string);
  }();
}

nonsense("test this");

// In your function, nonsense, change the immediate call to a setTimeout so
// that the call to blab comes after 2 seconds. The blab function itself should
// stay the same as before.

function nonsense(string) {
  var blab = setTimeout(function() {
    alert(string);
  }, 2000);
}

nonsense("test this");

// Now, instead of calling blab inside of nonsense, return blab (without
// invoking it). Call nonsense with some string and store the returned value
// (the blab function) in a variable called blabLater. Call nonsense again with
// a different string and store the returned value in a variable called
// blabAgainLater.

function nonsense(string) {
	var store  = function() {
				    alert(string);
				  };
	return store;			  
}

var blabLater = nonsense("blabLater");
console.log(blabLater());
var blabAgainLater = nonsense("blabAgainLater");
console.log(blabAgainLater());

// Write a function with a closure. The first function should only take one
// argument, someone's first name, and the inner function should take one more
//argument, someone's last name. The inner function should console.log both
// the first name and the last name.

// var lastNameTrier = function(firstName){
   //does stuff

//    var innerFunction = function() {
        //does stuff
  //  };
    //maybe returns something here
// };
// var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
// firstNameFarmer('Brown'); //logs 'Farmer Brown'

var lastNameTrier = function(firstName){
	var innerFunction = function(lastName) {
		console.log(firstName + ' ' + lastName);
  	};
  	return innerFunction;
}

 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown'); //logs 'Farmer Brown'

 // Create a storyWriter function that returns an object with two methods.
// One method, addWords adds a word to your story and returns the story while
// the other one, erase, resets the story back to an empty string. Here is an
// implementation:

// var farmLoveStory = storyWriter();
// farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
// farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

// var storyOfMyLife = storyWriter();
// storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
// storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
// storyOfMyLife.erase(); // ''

function storyWriter() {
	var text = '';
	var addWords = function(data) {
		console.log(text + data)
		text = text + data;
		return text + data;
	}
	var erase = function() {
		text = '';
		return text;
	}
	return {
		addWords :  addWords,
		elrase : erase
	}
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

 var storyOfMyLife = storyWriter();
 storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
 storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
 storyOfMyLife.erase(); // ''
