	var foo = 1;
	function bar() {
		var text = 1;						// text is in global context variable
		console.log(window.foo); 				// 1 print
		console.log(window.bar);				//function body
		console.log(foo);						// undefined 
		if (!foo) {								// !undefined -> true condition
			var foo = 10;					
		}
		alert(foo);								// alert 10 value , as foo value changed in to 100
	}
	bar();
-------------------------------------------------------------------------------------------------------

	var name = "Baggins";

	(function () {
	    // Outputs: "Original name was undefined"
	    console.log("Original name was " + name);  			// use window.name to print Baggins value as to search in scope chain

	    var name = "Underhill";

	    // Outputs: "New name is Underhill"
	    console.log("New name is " + name);
	})(); 

-------------------------------------------------------------------------------------------------------

	function abc() { 
		/*--------------through hoisting-----
			var a;
			var ws;
			if xyz define above then for this also it will create
		--------------------*/

	Basically, the JavaScript interpreter "looks ahead" to find all the variable declarations and "hoists" them to the top of the function
	. Which means that the example above is equivalent to this:

	   var abc = 10;   		
	   a = 10;					// as we have not declare nay variable for a later also. but once we assign 
	    console.log(abc);   	// value to this, it will host them at the top of function 
	    console.log(ws); 
	    console.log(a); 
	    //console.log(xyz);    			// this will break code, as xyz is not defined
        var ws = 20;
        console.log(ws); 
        xyz = 100;
        console.log(xyz);
    }    
    abc(); 



