// set all variables for the calculator
var result = document.getElementById( 'result' );
var clear = document.getElementById( 'clear' );
var displayer = document.getElementById( 'displayer' );
var input = document.getElementsByClassName( 'input' );
var firstInput = input[0].innerHTML;
var currentInputs = '';

// add events to the elements
result.addEventListener( 'click', function(){
	printResult();
} );
clear.addEventListener( 'click', function(){
	clearScreen();
} );
var i;
for( i = 0; i < input.length; i++ ){
	input[i].addEventListener( 'click', function(){
		addToText( this.innerHTML );
	} );
}

// store values in the variable
function addToText( text ){
	currentInputs += text;
	displayer.placeholder = currentInputs;
};

function clearScreen(){
	currentInputs = '';
	displayer.placeholder = 0;
}

function testInputs(){
	try	{
	eval(currentInputs);
	} catch ( a ) {
		if ( a instanceof SyntaxError ) {
			displayer.placeholder = "Error!";
		}
	}
}

function printResult(){
	if ( currentInputs == undefined || currentInputs == '' ) {
		displayer.placeholder = 0;
	} else {
		testInputs();
		currentInputs = Math.round( eval( currentInputs ) * 100 )/100;
		displayer.placeholder = currentInputs;
	}
};