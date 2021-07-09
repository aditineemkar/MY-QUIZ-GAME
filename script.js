// Number to decide the game digit i.e.
// game work on 2 digit, 3 digit or n
// digit of number.
const digit = 100;

// Set random numbers. The task of user
// is to find these numbers.
let num1 = Math.floor(Math.random() * digit);
let num2 = Math.floor(Math.random() * digit);
let num3 = Math.floor(Math.random() * digit);

// Hints are generated here onwards.
// Hint 1
let h1_a = Math.floor(Math.random() * digit);
let h1_b = Math.floor(Math.random() * digit);
let h1_c = num3;

// Hint 2
let h2_a = Math.floor(Math.random() * digit);
let h2_b = Math.floor(Math.random() * digit);
let h2_c = num2;

//Hint 3
let h3_a = num2;
let h3_b = num1;
let h3_c = Math.floor(Math.random() * digit);

// Hint 4
let h4_a = Math.floor(Math.random() * digit);
let h4_b = Math.floor(Math.random() * digit);
let h4_c = Math.floor(Math.random() * digit);

// Hint 5
let h5_a = Math.floor(Math.random() * digit);
let h5_b = Math.floor(Math.random() * digit);
let h5_c = num1;

// Hint generation ends

// Putting hints to index.html page
document.getElementById('h1').innerHTML =
	`<input type="text" id="b1" value="${h1_a}
	" readonly> <input type="text" id="b1" value="
	${h1_b}" readonly> <input type="text" id="b1"
	value="${h1_c}" readonly> `;

document.getElementById('h2').innerHTML =
	`<input type="text" id="b1" value="${h2_a}
	" readonly> <input type="text" id="b1"
	value="${h2_b}" readonly> <input type="text"
	id="b1" value="${h2_c}" readonly> `;

document.getElementById('h3').innerHTML =
	`<input type="text" id="b1" value="${h3_a}
	" readonly> <input type="text" id="b1"
	value="${h3_b}" readonly> <input type="text"
	id="b1" value="${h3_c}" readonly> `;

document.getElementById('h4').innerHTML =
	`<input type="text" id="b1" value="${h4_a}
	" readonly> <input type="text" id="b1"
	value="${h4_b}" readonly> <input type="text"
	id="b1" value="${h4_c}" readonly> `;

document.getElementById('h5').innerHTML =
	`<input type="text" id="b1" value="${h5_a}
	" readonly> <input type="text" id="b1"
	value="${h5_b}" readonly> <input type="text"
	id="b1" value="${h5_c}" readonly> `;

// Function to check whether game is solved or not
function myfunc() {

	// Getting value of user though input fields.
	let a = document.getElementById('b1').value;
	let b = document.getElementById('b2').value;
	let c = document.getElementById('b3').value;

	// Checking whether input fields is blank or not
	if (a != '' && b != '' && c != '') {
		if (a == num1 && b == num2 && c == num3) {

			// Outputting this message to index.html
			// page with id result.
			$('#result').html('You Crack it.????');

			// Opening popup modal
			$('#popup').modal('toggle');
		} else {

			// Outputting this message to index.html
			// page with id result.
			$('#result').html('Try once again.????');

			// Opening popup modal
			$('#popup').modal('toggle')
		}
	}
	else {
		
		// Outputting this message to index.html
		// page with id result.
		$('#result').html('Fill all fields.????');

		// Opening popup modal
		$('#popup').modal('toggle');
	}
}
