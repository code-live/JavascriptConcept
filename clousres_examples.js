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
number(1); // 2   