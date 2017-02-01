console.log( "js loading" );

// get element with id result
var result = document.getElementById( 'result' );
console.log( result );

result.addEventListener( 'click', function(){
	printResult();
} );

// get element with id clear
var clear = document.getElementById( 'clear' );
console.log( clear );

clear.addEventListener( 'click', function(){
	clearScreen();
} );

// get element with id displayer
var displayer = document.getElementById( 'displayer' );
console.log( displayer.placeholder );

// get elements with class text
var input = document.getElementsByClassName( 'input' );
console.log( input );

// get array[0] innerHTML property
var firstInput = input[0].innerHTML;
console.log( firstInput );

// add event to elements in the array
var i;
for( i = 0; i < input.length; i++ ){
	input[i].addEventListener( 'click', function(){
		console.log( this.innerHTML );

		addToText( this.innerHTML );
	} );
}

// set empty variable
var currentInputs = '';

// store values in the variable
function addToText( text ){
	console.log( "character " + text );

	currentInputs += text;
	displayer.placeholder = currentInputs;
	console.log( currentInputs );
};

// clear screen
function clearScreen(){
	currentInputs = '';
	displayer.placeholder = 0;
	console.log( 'current results =' + currentInputs );
}

// test results
function testInputs(){
	try	{
	eval(currentInputs);
	} catch ( a ) {
		if ( a instanceof SyntaxError ) {
			displayer.placeholder = "Error!";
		} else {
		 	throw ( finishHim() );
		}
	}
}

// print result
function printResult(){
	if ( currentInputs == undefined || currentInputs == '' ) {
		displayer.placeholder = 0;
	} else {
		testInputs();
		currentInputs = eval( currentInputs );
		displayer.placeholder = currentInputs;
		console.log( 'printing results' );
		console.log(eval( currentInputs ));
	}
};
