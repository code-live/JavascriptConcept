	var foo = 1;
	function bar() {
		console.log(window.foo); 				// 1 print
		console.log(window.bar);				//function body
		console.log(foo);						// undefined 
		if (!foo) {								// !undefined -> true condition
			var foo = 10;					
		}
		alert(foo);								// alert 10 value , as foo value changed in to 100
	}
	bar();